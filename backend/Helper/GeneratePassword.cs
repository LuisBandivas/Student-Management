namespace StudentManagementSystem.Helper
{
    public static class GeneratePassword
    {
        public static string  GenerateRandomPassword(int length)
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
    }
}