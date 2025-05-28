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

            if(existingSubject != null)
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
    }
}