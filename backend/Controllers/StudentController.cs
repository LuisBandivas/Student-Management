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
    public async Task<ActionResult<Student>> Post([FromBody] Student dto)
    {
        try
        {
            var student = await _studentService.AddStudentAsync(dto);
            return CreatedAtAction(nameof(Post), new { id = student.Id }, student);
        }
        catch (InvalidOperationException ex)
        {
            return BadRequest(new { message = ex.Message });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An unexpected error occurred." });
        }
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Student>>> GetAll()
    {
        try
        {
            var student = await _studentService.GetAllStudentsAsync();
            return Ok(student);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An unexpected error occurred." });
        }
    }

    [HttpPost("enroll")]
    public async Task<ActionResult> EnrollStudentInSubject([FromQuery] int studentId, [FromQuery] int subjectId)
    {
        try
        {
            await _studentService.EnrollStudentInSubjectAsync(studentId, subjectId);
            return Ok(new { message = "Student enrolled successfully." });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An unexpected error occurred." });
        }
    }
}