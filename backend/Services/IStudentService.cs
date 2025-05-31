using StudentManagementSystem.Models;

namespace StudentManagementSystem.Services
{
    public interface IStudentService
    {
        Task<Student> AddStudentAsync(Student dto);
        Task<IEnumerable<Student>> GetAllStudentsAsync();
        Task EnrollStudentInSubjectAsync(int studentId, int subjectId);
    }
}