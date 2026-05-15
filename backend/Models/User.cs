using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BlogCRUD.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]

        public string ID {set; get;}

        public string Name {set; get;}

        public string Email {set; get;}

        public string Password {set; get;}
        


    }
}