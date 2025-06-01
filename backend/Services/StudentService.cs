using Microsoft.EntityFrameworkCore;
using StudentManagementSystem.Models;
using StudentManagementSystem.Data;
using StudentManagementSystem.Helper;

namespace StudentManagementSystem.Services
{
    public class StudentService : IStudentService
    {
        private readonly AppDbContext _context = null!;
        private readonly IEmailService _emailService;

        public StudentService(AppDbContext context, IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public async Task<Student> AddStudentAsync(Student dto)
        {
            // Check if the email are already existing
            var emailToCheck = dto.Email.Trim().ToLower();
            var existingEmail = await _context.Students
                .FirstOrDefaultAsync(s => s.Email == emailToCheck);

            if (existingEmail != null)
            {
                throw new InvalidOperationException("A student with this email already exist");
            }

            // Generating Random w/ Hashing Password
            var (initialPassword, hashedPassword) = GeneratePassword.GenerateAndHashPassword(8);

            var student = new Student
            {
                SchoolId = await GenerateStudentID(),
                Firstname = dto.Firstname,
                Lastname = dto.Lastname,
                Dob = dto.Dob,
                Gender = dto.Gender,
                Email = dto.Email,
                Program = dto.Program,
                Section = dto.Section,
                YearLevel = dto.YearLevel,
                Password = hashedPassword,
            };

            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            // Sending Intial password to email
            await SendCredentialToEmail(student, initialPassword);

            return student;
        }

        public async Task<IEnumerable<Student>> GetAllStudentsAsync()
        {
            return await _context.Students.ToListAsync();
        }

        private async Task SendCredentialToEmail(Student student, string intialPass)
        {
            string subject = "Your account Login Credential";
            string body = $@"
                Hi, {student.Firstname},
                
                Your account has been created.
                
                StudentID: {student.SchoolId}
                Password: {intialPass}

                Please change your password after logging in.
            ";

            await _emailService.SendEmailAsync(student.Email, subject, body);
        }

        private async Task<string> GenerateStudentID()
        {
            var year = DateTime.UtcNow.Year.ToString();

            var latestStud = await _context.Students
                .Where(s => s.SchoolId.StartsWith(year))
                .OrderByDescending(s => s.SchoolId)
                .FirstOrDefaultAsync();

            int nextIdNo = 1;

            if (latestStud != null)
            {
                var latestID = latestStud.SchoolId;
                var part = latestID.Split('-');
                if (part.Length == 2 && int.TryParse(part[1], out int currentNum))
                {
                    nextIdNo = currentNum + 1;
                }
            }

            string newStudentId = $"{year}-{nextIdNo.ToString("D5")}";
            return newStudentId;
        }

        public async Task EnrollStudentInSubjectAsync(int studentId, int subjectId)
        {
            var student = await _context.Students.FindAsync(studentId);
            var subject = await _context.Subjects.FindAsync(subjectId);

            if (student == null || subject == null)
            {
                throw new InvalidOperationException("Student or Subject not found.");
            }

            var existingEnrollment = await _context.StudentPerSubjects
                .FirstOrDefaultAsync(sp => sp.StudentId == studentId && sp.SubjectId == subjectId);

            if (existingEnrollment != null)
            {
                throw new InvalidOperationException("Student is already enrolled in this subject.");
            }

            var studentPerSubject = new StudentPerSubject
            {
                StudentId = studentId,
                SubjectId = subjectId
            };

            _context.StudentPerSubjects.Add(studentPerSubject);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Student>> GetStudentsBySubjectAsync(int subjectId)
        {
            return await _context.StudentPerSubjects
                .Where(sp => sp.SubjectId == subjectId)
                .Include(sp => sp.Student)
                .Select(sp => sp.Student)
                .ToListAsync();
        }
    }
}