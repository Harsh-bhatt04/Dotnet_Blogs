using BlogCRUD.Models;

namespace BlogCRUD.Services
{
    public class BlogService
    {
        private static readonly List<Blog> _blogs =
        [
            new() { ID = 1, Title = "First Post", Body = "My first post" },
            new() { ID = 2, Title = "Second Post", Body = "My Second post" },
            new() { ID = 3,Title = "Third Post", Body = "My Third post" }
        ];
        
        public List<Blog> GetAll()
        {
            return _blogs;
        }

        public Blog Add(Blog blog)
        {
            _blogs.Add(blog);
            return blog;
        }

        public Blog? GetBlogById(int id)
        {
            return _blogs.FirstOrDefault(b => b.ID == id);
        }

        public Blog? UpdateBlog(int id, Blog updatedBlog)
        {   
            var blog = _blogs.FirstOrDefault((b) => b.ID == id);

            if(blog == null)
                return null;
            blog.Title = updatedBlog.Title;
            blog.Body = updatedBlog.Body;

            return blog;
            
        }

        public Blog? DeleteBlogByID(int id)
        {
            var blog = _blogs.FirstOrDefault(b => b.ID == id);
            if(blog == null)
                return null;
            _blogs.Remove(blog);
            return blog;
        }

    }
}