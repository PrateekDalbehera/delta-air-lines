using DeltaAPI.Entity.Implementations;
using DeltaAPI.Entity.Interfaces;
using DeltaAPI.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeltaAPI.Repository.Implementations;

public class StudentRepository : IStudentRepository
{
    public StudentRepository()
    {
        using(var context = new StudentsDbContext())
        {
            var students = new List<StudentEntity>
                {
                    new StudentEntity
                        {
                            Name = "Alice",
                            Age = 20,
                            Hobbies = new List<HobbyEntity>
                                {
                                    new HobbyEntity { Name = "Reading" },
                                    new HobbyEntity { Name = "Swimming" },
                                    new HobbyEntity { Name = "Coding" }
                                }
                        },
                    new StudentEntity
                        {
                            Name = "Bob",
                            Age = 22,
                            Hobbies = new List<HobbyEntity>
                                {
                                    new HobbyEntity { Name = "Painting" },
                                    new HobbyEntity { Name = "Dancing" },
                                    new HobbyEntity { Name = "Singing" }
                                }
                        }
                };

            context.Students.AddRange(students);
            context.SaveChanges();
        }
    }
    public async Task<IEnumerable<StudentEntity>> SearchStudentsAsync(string query)
    {
        using (var context = new StudentsDbContext())
        {
            var students = context.Students
                .Include(s => s.Hobbies)
                .Where(s => 
                        (s.Name.IndexOf(query, StringComparison.OrdinalIgnoreCase) >= 0) ||
                        (s.Age.ToString().IndexOf(query, StringComparison.OrdinalIgnoreCase) >= 0) ||
                        (s.Hobbies.Any(h => h.Name.IndexOf(query, StringComparison.OrdinalIgnoreCase) >= 0))
                    )
                .ToList();

            return students;
        }
    }
}
