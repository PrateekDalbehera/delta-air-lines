using DeltaAPI.Model.Interfaces;

namespace DeltaAPI.Model.Implementations;

public class Student : IStudent
{
    public string Name { get; set; }
    public int Age { get; set; }
    public IEnumerable<IHobby> Hobbies { get; set; }
}
