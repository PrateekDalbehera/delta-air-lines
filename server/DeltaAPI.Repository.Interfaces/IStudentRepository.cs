using DeltaAPI.Entity.Implementations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeltaAPI.Repository.Interfaces;

public interface IStudentRepository
{
    Task<IEnumerable<StudentEntity>> SearchStudentsAsync(string query);
}
