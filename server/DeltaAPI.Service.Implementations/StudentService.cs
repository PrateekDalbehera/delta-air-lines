using DeltaAPI.Model.Interfaces;
using DeltaAPI.Repository.Interfaces;
using DeltaAPI.Service.Interfaces;

namespace DeltaAPI.Service.Implementations;

public class StudentService : IStudentService
{
    private readonly IStudentRepository _studentRepository;

    public StudentService(IStudentRepository studentRepository)
    {
        _studentRepository = studentRepository ?? throw new NotImplementedException(typeof(IStudentRepository).ToString());
    }

    public async Task<IEnumerable<IStudent>> SearchStudentsAsync(string query)
    {
        return new Mapper().Map(
            await _studentRepository.SearchStudentsAsync(query)
        );
    }
}