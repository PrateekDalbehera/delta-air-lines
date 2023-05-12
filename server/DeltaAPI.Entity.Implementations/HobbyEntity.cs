using System.ComponentModel.DataAnnotations;
using DeltaAPI.Entity.Interfaces;

namespace DeltaAPI.Entity.Implementations;

public class HobbyEntity : IHobbyEntity
{
    [Key]
    public string Name { get; set; }
}
