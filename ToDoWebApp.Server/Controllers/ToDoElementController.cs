using Microsoft.AspNetCore.Mvc;
using ToDoWebApp.Server.Classes;

namespace ToDoWebApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoElementController : ControllerBase
    {
        private List<ToDoElement>? toDolist;

        private readonly ILogger<ToDoElementController> _logger;

        public ToDoElementController(ILogger<ToDoElementController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ToDoElement> Get()
        {
            toDolist = new List<ToDoElement>();
            GenerateTestData();
            var output = toDolist.ToArray();
            return output;
        }

        private void GenerateTestData()
        {
            if (toDolist != null)
            {
                toDolist.Add(new ToDoElement()
                {
                    ToDoID = 1,
                    ToDoName = "Task 1",
                    ToDoDescription = "Task 1 Desc.",
                    ToDoDueDate = DateTime.Now.ToString("dd.MM.yyyy")
                }
                );

                toDolist.Add(new ToDoElement()
                {
                    ToDoID = 2,
                    ToDoName = "Task 2",
                    ToDoDescription = "",
                    ToDoDueDate = DateTime.Now.ToString("dd.MM.yyyy")
                }
                );

                toDolist.Add(new ToDoElement()
                {
                    ToDoID = 3,
                    ToDoName = "Task 1",
                    ToDoDescription = "Task 3 Desc."
                }
                );
            }
        }
    }
}
