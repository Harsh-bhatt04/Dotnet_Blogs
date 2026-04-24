namespace BlogCRUD.Models
{
    public class MongoDbSettings
    {
        public string ConnectionString{set; get;}
        public string DatabaseName {set; get;}

        public string CollectionName {set; get;}
    }
}