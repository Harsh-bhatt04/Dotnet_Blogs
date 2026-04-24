namespace BlogCRUD.DTOs
{
    public class CreateBlogDto
    {
        public required string Title { get; set; }
        public required string Body { get; set; }
    }
}