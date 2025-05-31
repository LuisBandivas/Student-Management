using System.ComponentModel.DataAnnotations;

namespace StudentManagementSystem.Models
{
    public class Student
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string SchoolId { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Firstname { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Lastname { get; set; } = string.Empty;

        public DateTime Dob { get; set; }

        [MaxLength(50)]
        public string Gender { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Email { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Program { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Section { get; set; } = string.Empty;

        [MaxLength(50)]
        public string YearLevel { get; set; } = string.Empty;

        [MaxLength(50)]
        public string Password { get; set; } = string.Empty;
  
        public ICollection<StudentPerSubject> StudentSubjects { get; set; } = new List<StudentPerSubject>();
    }
}