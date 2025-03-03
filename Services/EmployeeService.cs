using Employee_Directory.Data;
using Employee_Directory.Models;
using MongoDB.Driver;

namespace Employee_Directory.Services
{
    public class EmployeeService
    {
        private readonly IMongoCollection<Employee> _employees;

        public EmployeeService(MongoDbContext context)
        {
            _employees = context.Employees;
        }

        public async Task<List<Employee>> GetAsync() => await _employees.Find(emp => true).ToListAsync();

        public async Task<Employee> GetAsync(string id) => await _employees.Find(emp => emp.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Employee employee) => await _employees.InsertOneAsync(employee);

        public async Task UpdateAsync(string id, Employee employee) => await _employees.ReplaceOneAsync(emp => emp.Id == id, employee);

        public async Task RemoveAsync(string id) => await _employees.DeleteOneAsync(emp => emp.Id == id);
    }
}