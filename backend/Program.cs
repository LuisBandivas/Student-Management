using Microsoft.EntityFrameworkCore;
using StudentManagementSystem.Data;
using StudentManagementSystem.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers(); // Enables controller support

// Students Service
builder.Services.AddScoped<IStudentService, StudentService>();
builder.Services.AddTransient<IEmailService, EmailService>();

// Subjects Service
builder.Services.AddScoped<ISubjectService, SubjectService>();

// Add CORS (place here)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:5173") // React dev server
               .AllowAnyMethod()
               .AllowAnyHeader();
     });
});

// Database configuration
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        new MySqlServerVersion(new Version(10, 1, 36))
    )
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    // Optional: app.UseSwagger(); app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors();
app.UseAuthorization();
app.MapControllers(); // This maps controller endpoints
app.Run();