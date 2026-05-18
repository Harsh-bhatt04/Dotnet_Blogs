using BlogCRUD.Models;
using BlogCRUD.DTOs.Auth;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BlogCRUD.Services
{
    public class AuthService
    {
        private readonly IMongoCollection<User> _users;
        private readonly JwtService _jwtService;


        public AuthService(IOptions<MongoDbSettings> settings, JwtService jwtService)
        {
            _jwtService = jwtService;

            var client = new MongoClient(
                settings.Value.ConnectionString
            );

            var database = client.GetDatabase(
                settings.Value.DatabaseName
            );

            _users = database.GetCollection<User>("Users");
        }

        public async Task<string> Register(RegisterDto dto)
        {
            var existingUser = await _users.Find(x => x.Email == dto.Email).FirstOrDefaultAsync();

            if (existingUser != null)
                return "User already exist";

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(dto.Password);

            var user = new User
            {
                Name = dto.Name,
                Email = dto.Email,
                Password = hashedPassword
            };

            await _users.InsertOneAsync(user);

            return "User registered successfully";
        }

        public async Task<object> Login(LoginDto dto)
        {
            var user = await _users.Find(x => x.Email == dto.Email).FirstOrDefaultAsync();

            if (user == null)
                return "User not found";

            bool isPasswordCorrect = BCrypt.Net.BCrypt.Verify(dto.Password, user.Password);
            Console.WriteLine(isPasswordCorrect);
            if (!isPasswordCorrect)
                return "Invalid Password";

            var token = _jwtService.GenerateToken(user);

            return new
            {
                token,
                success = true,
                name = user.Name,
                email = user.Email,
                message = "Login successful"
            };

        }

    }
}