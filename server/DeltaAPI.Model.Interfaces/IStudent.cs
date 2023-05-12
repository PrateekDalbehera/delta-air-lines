using System.Collections.Generic;

namespace DeltaAPI.Model.Interfaces;

public interface IStudent
{
    string Name { get; set; }
    int Age { get; set; }
    IEnumerable<IHobby> Hobbies { get; set; }
}