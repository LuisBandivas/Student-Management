using Microsoft.EntityFrameworkCore;
using StudentManagementSystem.Models;
using StudentManagementSystem.Data;

namespace StudentManagementSystem.Services
{
    public class SubjectService : ISubjectService
    {
        private readonly AppDbContext _context;

        public SubjectService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Subject> AddSubjectAsync(Subject dto)
        {
            var existingSubject = await _context.Subjects
                .FirstOrDefaultAsync(s => s.CourseCode == dto.CourseCode.Trim().ToUpper());

            if (existingSubject != null)
            {
                throw new InvalidOperationException("A subject with this course code already exists.");
            }

            dto.CourseCode = dto.CourseCode.Trim().ToUpper();

            _context.Subjects.Add(dto);
            await _context.SaveChangesAsync();
            return dto;
        }

        public async Task<IEnumerable<Subject>> GetAllSubjectsAsync()
        {
            return await _context.Subjects.ToListAsync();
        }

        // public async Task EnrollStudentInSubjectAsync(string studentId, int subjectId)
        // {
        //     var student = await _context.Students.FindAsync(studentId);
        //     var subject = await _context.Subjects.FindAsync(subjectId);

        //     if (student == null || subject == null)
        //     {
        //         throw new InvalidOperationException("Student or Subject not found.");
        //     }

        //     var existingEnrollment = await _context.StudentPerSubjects
        //         .FirstOrDefaultAsync(sp => sp.StudentId == studentId && sp.SubjectId == subjectId);

        //     if (existingEnrollment != null)
        //     {
        //         throw new InvalidOperationException("Student is already enrolled in this subject.");
        //     }

        //     var studentPerSubject = new StudentPerSubject
        //     {
        //         StudentId = studentId,
        //         SubjectId = subjectId
        //     };

        //     _context.StudentPerSubjects.Add(studentPerSubject);
        //     await _context.SaveChangesAsync();
        // }

        // public async Task<IEnumerable<Student>> GetStudentsBySubjectAsync(int subjectId)
        // {
        //     var subject = await _context.Subjects
        //         .Include(s => s.StudentSubjects)
        //         .ThenInclude(ss => ss.Student)
        //         .FirstOrDefaultAsync(s => s.Id == subjectId);

        //     if (subject == null)
        //     {
        //         throw new InvalidOperationException("Subject not found.");
        //     }

        //     return subject.StudentSubjects.Select(ss => ss.Student).ToList();
        //  }
    }
}