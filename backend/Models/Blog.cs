using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BlogCRUD.Models
{
    public class Blog
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? ID{get; set;}
        public required string Title{get; set;}
        public required string Body {get; set;}
    }
}