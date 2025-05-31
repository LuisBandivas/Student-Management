using System.ComponentModel.DataAnnotations;

namespace StudentManagementSystem.Models
{
    public class StudentPerSubject
    {
        public int StudentId { get; set; }
        public Student Student { get; set; } 

        public int SubjectId { get; set; }
        public Subject Subject { get; set; }   
    }
}