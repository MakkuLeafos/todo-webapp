using Microsoft.AspNetCore.Mvc;
using ToDoWebApp.Server.Classes;
using ToDoWebApp.Server.Services;

namespace ToDoWebApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoElementController : ControllerBase
    {
        private readonly IToDoListService _toDoListService;

        public ToDoElementController(IToDoListService toDoListService)
        {
            _toDoListService = toDoListService;
        }

        [HttpGet]
        public List<ToDoElement> Get()
        {
            //GenerateTestData();
            return _toDoListService.GetList();
        }

        private void GenerateTestData()
        {
            if (_toDoListService.GetList() != null)
            {
                _toDoListService.AddToDoElement(new ToDoElement()
                {
                    ToDoName = "Task 1",
                    ToDoDescription = "Task 1 Desc.",
                    ToDoDueDate = DateTime.Now.ToString("dd.MM.yyyy")
                }
                );

                _toDoListService.AddToDoElement(new ToDoElement()
                {
                    ToDoName = "Task 2",
                    ToDoDescription = "",
                    ToDoDueDate = DateTime.Now.ToString("dd.MM.yyyy")
                }
                );

                _toDoListService.AddToDoElement(new ToDoElement()
                {
                    ToDoName = "Task 1",
                    ToDoDescription = "Task 3 Desc."
                }
                );
            }
        }
        [HttpPost]
        public void Post([FromBody] ToDoElement newToDo)
        {
            _toDoListService.AddToDoElement(newToDo);
        }
    }
}