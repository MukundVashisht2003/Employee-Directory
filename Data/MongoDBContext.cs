using MongoDB.Driver;
using Employee_Directory.Models;

namespace Employee_Directory.Data
{
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;

        public MongoDbContext(IConfiguration configuration)
        {
            var client = new MongoClient(configuration.GetConnectionString("MongoDb"));
            _database = client.GetDatabase("EmployeeDb");
        }

        public IMongoCollection<Employee> Employees => _database.GetCollection<Employee>("Employees");
    }
}