using StudentManagementSystem.Models;

namespace StudentManagementSystem.Services
{
    public interface IStudentService
    {
        Task<Student> AddStudentAsync(Student dto);
    }
}