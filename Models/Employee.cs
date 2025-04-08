using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Employee_Directory.Models
{
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } // MongoDB will generate this automatically if null

        public string Name { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
        public decimal Salary { get; set; }
    }
}
