using Microsoft.AspNetCore.Mvc;
using BlogCRUD.Models;
using BlogCRUD.Services;
using BlogCRUD.DTOs;

namespace BlogCRUD.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService blogService)
        {
            _blogService = blogService;
        }

        [HttpGet]
        public async Task<IActionResult> GetBlogs()
        {
            var blogs = await _blogService.GetAll();
            return Ok(blogs);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBlog(CreateBlogDto dto)
        {
            var blog = new Blog
            {
                Title = dto.Title,
                Body = dto.Body
            };

            await _blogService.Add(blog);
            return Ok(blog);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogById(string id)
        {
            var blog = await _blogService.GetBlogById(id);

            if (blog == null)
                return NotFound();

            return Ok(blog);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBlog(string id, UpdateBlogDto dto)
        {
            var blog = new Blog
            {
                ID = id,
                Title = dto.Title,
                Body = dto.Body
            };

            var updated = await _blogService.UpdateBlog(id, blog);

            if (!updated)
                return NotFound();

            return Ok(blog);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogByID(string id)
        {
            var deleted = await _blogService.DeleteBlogByID(id);

            if (!deleted)
                return NotFound();

            return Ok("Deleted successfully");
        }
    }
}