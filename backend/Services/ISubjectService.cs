using StudentManagementSystem.Models;

namespace StudentManagementSystem.Services
{
    public interface ISubjectService
    {
        Task<Subject> AddSubjectAsync(Subject dto);
        Task<IEnumerable<Subject>> GetAllSubjectsAsync();
    }
}