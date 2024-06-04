using Microsoft.AspNetCore.Mvc;
using ToDoWebApp.Server.Classes;

namespace ToDoWebApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        private List<ToDoElement> toDolist;
        public ToDoListController()
        {
            toDolist = new List<ToDoElement>();
        }

        [HttpGet(Name = "GetToDoList")]
        public List<ToDoElement> GetToDoElements()
        {
            return toDolist;
        }
    }
}
