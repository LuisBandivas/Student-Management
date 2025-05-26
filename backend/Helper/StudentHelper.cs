using Microsoft.AspNetCore.Identity;

namespace StudentManagementSystem.Helper
{
    public static class GeneratePassword
    {
        public static string GenerateRandomPassword(int length)
        {
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            Random random = new Random();
            char[] res = new char[length];
            for (int i = 0; i < length; i++)
            {
                res[i] = valid[random.Next(valid.Length)];
            }
            return new string(res);
        }

        public static (string InitialPassword, string HashedPassword) GenerateAndHashPassword(int length)
        {
            var initial = GenerateRandomPassword(length);
            var passwordHasher = new PasswordHasher<object>();
            var hashed = passwordHasher.HashPassword(null, initial);
            return (initial, hashed);
        }
    }
}