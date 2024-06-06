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

        [HttpPost]
        public void Post([FromBody] ToDoElement newToDo)
        {
            _toDoListService.AddToDoElement(newToDo);
        }

        [HttpDelete("{deleteId}")]
        public void DeleteItem(int deleteId)
        {
            _toDoListService.DeleteToDoElement(deleteId);
        }
    }
}