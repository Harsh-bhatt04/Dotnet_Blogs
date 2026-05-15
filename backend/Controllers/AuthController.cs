using BlogCRUD.DTOs.Auth;
using BlogCRUD.Services;
using Microsoft.AspNetCore.Mvc;

namespace BlogCRUD.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]

    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            var result = await _authService.Register(dto);

            return Ok(result);
        } 

        [HttpPost("login")]

        public async Task<IActionResult> Login(LoginDto dto)
        {
            var result = await _authService.Login(dto);

            return Ok(result);
        }

    }

}