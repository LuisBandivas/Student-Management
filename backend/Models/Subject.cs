using System.ComponentModel.DataAnnotations;

namespace StudentManagementSystem.Models
{
    public class Subject
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string CourseCode { get; set; } = string.Empty;
        
        [MaxLength(50)]
        public string CourseName { get; set; } = string.Empty;

        [MaxLength(50)]
        public string CourseDescription { get; set; } = string.Empty;

    }
} 