using System.Collections.Generic;

namespace DeltaAPI.Entity.Interfaces;

public interface IStudentEntity
{
    string Name { get; set; }
    int Age { get; set; }
    IEnumerable<IHobbyEntity> Hobbies { get; set; }
}
