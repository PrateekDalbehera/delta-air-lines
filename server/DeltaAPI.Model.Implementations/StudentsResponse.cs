using DeltaAPI.Model.Interfaces;

namespace DeltaAPI.Model.Implementations;

public class StudentsResponse
{
    public IEnumerable<IStudent> Students { get; set; }
}