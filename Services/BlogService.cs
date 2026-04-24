using BlogCRUD.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace BlogCRUD.Services
{
    public class BlogService
    {
        private readonly IMongoCollection<Blog> _blogs;

        public BlogService(IOptions<MongoDbSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.ConnectionString);
            var database = mongoClient.GetDatabase(settings.Value.DatabaseName);

            _blogs = database.GetCollection<Blog>(settings.Value.CollectionName);
        }

        public async Task<List<Blog>> GetAll()
        {
            return await _blogs.Find(_ => true).ToListAsync();
        }

        public async Task<Blog> Add(Blog blog)
        {
            await _blogs.InsertOneAsync(blog);
            return blog;
        }

        public async Task<Blog?> GetBlogById(string id)
        {
            return await _blogs.Find(b => b.ID == id).FirstOrDefaultAsync();
        }

        public async Task<bool> UpdateBlog(string id, Blog blog)
        {
            var result = await _blogs.ReplaceOneAsync(b => b.ID == id, blog);
            return result.MatchedCount > 0;
        }

        public async Task<bool> DeleteBlogByID(string id)
        {
            var result = await _blogs.DeleteOneAsync(b => b.ID == id);
            return result.DeletedCount > 0;
        }
    }
}