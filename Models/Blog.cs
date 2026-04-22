namespace BlogCRUD.Models
{
    public class Blog
    {
        public int ID{get; set;}
        public required string Title{get; set;}
        public required string Body {get; set;}
    }
}