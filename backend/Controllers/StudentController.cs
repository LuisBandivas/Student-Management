using Microsoft.AspNetCore.Mvc;
using StudentManagementSystem.Models;
using StudentManagementSystem.Services;

[Route("api/students")]
[ApiController]
public class StudentController : ControllerBase
{
    private readonly IStudentService _studentService;
    public StudentController(IStudentService studentService)
    {
        _studentService = studentService;
    }

    [HttpPost] 
    public async Task<ActionResult<Student>> Post(Student dto)
    {
        var student = await _studentService.AddStudentAsync(dto);
        return CreatedAtAction(nameof(Post), new { id = student.Id }, student);
    }
}