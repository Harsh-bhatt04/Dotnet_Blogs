namespace BlogCRUD.DTOs
{
    public class UpdateBlogDto
    {
        public required string Title { get; set; }
        public required string Body { get; set; }
    }
}