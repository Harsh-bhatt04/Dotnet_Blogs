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
        public IActionResult GetBlogs()
        {
            var blogs = _blogService.GetAll();
            var result = blogs.Select(b => new BlogResponseDto
            {
                ID = b.ID,
                Title = b.Title,
                Body = b.Body
            });

            return Ok(result);
        }

        [HttpPost]
        public IActionResult CreateBlog(CreateBlogDto dto)
        {
            var blog = new Blog
            {
                Title = dto.Title,
                Body = dto.Body
            };

            var created = _blogService.Add(blog);

            var response = new BlogResponseDto
            {
                ID = created.ID,
                Title = created.Title,
                Body = created.Body
            };

            return Ok(response);
        }

        
        [HttpGet("{id}")]
        public IActionResult GetBlogById(int id)
        {
            var blog = _blogService.GetBlogById(id);

            if (blog == null)
                return NotFound();
            var response = new BlogResponseDto
            {
                ID = blog.ID,
                Title = blog.Title,
                Body = blog.Body
            };

            return Ok(response);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBlog(int id, UpdateBlogDto dto)
        {
            var blog = new Blog
            {
                ID = id,
                Title = dto.Title,
                Body = dto.Body
            };

            var updated = _blogService.UpdateBlog(id,blog);

            if(updated == null)
                return NotFound();
            var response = new BlogResponseDto
            {
                ID = updated.ID,
                Title = updated.Title,
                Body = updated.Body
            };

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBlogByID(int id)
        {
            var blog = _blogService.DeleteBlogByID(id);
            if (blog == null)
                return NotFound();
            return Ok(blog);
        }
    }
}