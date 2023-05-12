using DeltaAPI.Entity.Implementations;
using DeltaAPI.Model.Implementations;
using DeltaAPI.Model.Interfaces;

namespace DeltaAPI.Service.Implementations;

public class Mapper
{
    public IEnumerable<IStudent> Map(IEnumerable<StudentEntity> studentEntities)
    {
        return studentEntities.Select(entity => new Student
            {
                Name = entity.Name,
                Age = entity.Age,
                Hobbies = entity.Hobbies.ToList().ConvertAll(h => new Hobby { Name = h.Name})
            });
    }
}