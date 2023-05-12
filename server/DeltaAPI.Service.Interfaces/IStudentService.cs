using DeltaAPI.Model.Interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeltaAPI.Service.Interfaces;

public interface IStudentService
{
    Task<IEnumerable<IStudent>> SearchStudentsAsync(string query);
}