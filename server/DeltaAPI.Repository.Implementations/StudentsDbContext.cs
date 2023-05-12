using DeltaAPI.Entity.Implementations;
using Microsoft.EntityFrameworkCore;

namespace DeltaAPI.Repository.Implementations;

public class StudentsDbContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseInMemoryDatabase(databaseName: "StudentsDb");
    }

    public DbSet<StudentEntity> Students { get; set; }
    public DbSet<HobbyEntity> Hobbies { get; set; }
}