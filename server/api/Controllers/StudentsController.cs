using DeltaAPI.Model.Implementations;
using DeltaAPI.Model.Interfaces;
using DeltaAPI.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("data")]
public class StudentsController : ControllerBase
{
    private readonly ILogger<StudentsController> _logger;
    private readonly IStudentService _studentService;

    public StudentsController(ILogger<StudentsController> logger, IStudentService studentService)
    {
        _logger = logger;
        _studentService = studentService;
    }

    [HttpPost(Name = "SearchStudents")]
    public async Task<ActionResult<IEnumerable<IStudent>>> SearchStudentsAsync(SearchParams searchParams)
    {
        return Ok(await _studentService.SearchStudentsAsync(searchParams.Query));
    }
}