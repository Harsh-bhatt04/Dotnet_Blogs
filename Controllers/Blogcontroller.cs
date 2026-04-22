using Microsoft.AspNetCore.Mvc;
using BlogCRUD.Models;
using BlogCRUD.Services;

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
            return Ok(_blogService.GetAll());
        }

        [HttpPost]
        public IActionResult CreateBlog(Blog blog)
        {
            var created = _blogService.Add(blog);
            return Ok(created);
        }

        [HttpGet("{id}")]
        public IActionResult GetBlogById(int id)
        {
            var blog = _blogService.GetBlogById(id);

            if(blog == null)
                return NotFound();
            return Ok(blog);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBlog(int id, Blog blog)
        {
            var updateBlog = _blogService.UpdateBlog(id,blog);
            if(updateBlog == null)
                return NotFound();
            return Ok(blog);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBlogByID(int id)
        {
            var blog = _blogService.DeleteBlogByID(id);
            if(blog == null)
                return NotFound();
            return Ok(blog);
        }
    }
}