using StudentManagementSystem.Models;
using StudentManagementSystem.Data;

namespace StudentManagementSystem.Services
{
    public class StudentService : IStudentService
    {
        private readonly AppDbContext _context = null!;

        public StudentService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Student> AddStudentAsync(Student dto)
        {
            var student = new Student
            {
                FullName = dto.FullName,
                Email = dto.Email,
                Section = dto.Section
            };

            _context.Students.Add(student);
            await _context.SaveChangesAsync();

            return student;
        }
    }
}