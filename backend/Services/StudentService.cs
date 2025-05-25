using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using StudentManagementSystem.Models;
using StudentManagementSystem.Data;
using StudentManagementSystem.Helper;

namespace StudentManagementSystem.Services
{
    public class StudentService : IStudentService
    {
        private readonly AppDbContext _context = null!;
        private readonly IEmailService _emailService;

        public StudentService(AppDbContext context,  IEmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public async Task<Student> AddStudentAsync(Student dto)
        {
            var lastStudent = await _context.Students
                .OrderByDescending(s => s.Id)
                .FirstOrDefaultAsync();

            int lastNumber = 0;

            if (lastStudent != null && !string.IsNullOrWhiteSpace(lastStudent.StudentId))
            {
                var parts = lastStudent.StudentId.Split('-');
                if (parts.Length == 2 && int.TryParse(parts[1], out int parsed))
                {
                    lastNumber = parsed;
                }
            }

            int newIdNumber = lastNumber + 1;
            string newStudentId = $"000-{newIdNumber.ToString().PadLeft(3, '0')}";

            // Generate Randowm Password
            var initialPassword = GeneratePassword.GenerateRandomPassword(8);
            var passwordHasher = new PasswordHasher<Student>();

            var student = new Student
            {
                StudentId = newIdNumber.ToString(),
                Firstname = dto.Firstname,
                Lastname = dto.Lastname,
                Dob = dto.Dob,
                Gender = dto.Gender,
                Email = dto.Email,
                Program = dto.Program,
                Section = dto.Section,
                YearLevel = dto.YearLevel,
                Password = passwordHasher.HashPassword(null, initialPassword)
            };

            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            await _emailService.SendEmailAsync(
                dto.Email,
                "Your Student Account Details",
                $"Hi {dto.Firstname},\n\nYour account has been created.\nStudent ID: {newStudentId}\nPassword: {initialPassword}\n\nPlease change your password after logging in."
            );

            return student;
        }
    }
}