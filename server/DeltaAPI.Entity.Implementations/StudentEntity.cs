using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DeltaAPI.Entity.Implementations;

public class StudentEntity
{
    [Key]
    public string Name { get; set; }
    public int Age { get; set; }
    public List<HobbyEntity> Hobbies { get; set; }
}
