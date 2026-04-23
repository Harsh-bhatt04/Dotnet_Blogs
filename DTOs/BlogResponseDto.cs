namespace BlogCRUD.DTOs
{
    public class BlogResponseDto
    {
        public int? ID { get; set; }
        public required string Title { get; set; }
        public required string Body { get; set; }
    }
}