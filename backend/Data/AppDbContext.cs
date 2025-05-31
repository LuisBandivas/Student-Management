using Microsoft.EntityFrameworkCore;
using StudentManagementSystem.Models;

namespace StudentManagementSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<StudentPerSubject> StudentPerSubjects { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<StudentPerSubject>()
                .HasKey(sp => new { sp.StudentId, sp.SubjectId });

            modelBuilder.Entity<StudentPerSubject>()
                .HasOne(sp => sp.Student)
                .WithMany(s => s.StudentSubjects)
                .HasForeignKey(sp => sp.StudentId);

            modelBuilder.Entity<StudentPerSubject>()
                .HasOne(sp => sp.Subject)
                .WithMany(s => s.StudentSubjects)
                .HasForeignKey(sp => sp.SubjectId);
        }
    }
}