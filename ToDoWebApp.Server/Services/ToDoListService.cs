namespace ToDoWebApp.Server.Services
{
    using ToDoWebApp.Server.Classes;
    public interface IToDoListService 
    { 
        List<ToDoElement> GetList();
        void AddToDoElement(ToDoElement newElement);

        void DeleteToDoElement(int deletedItemId);
    }

    public class ToDoListService : IToDoListService
    {
        private readonly List<ToDoElement> toDoList = new List<ToDoElement>();

        public List<ToDoElement> GetList() 
        { 
            return toDoList;
        }

        public void AddToDoElement(ToDoElement newElement)
        {
            toDoList.Add(newElement);
        }

        public void DeleteToDoElement(int deletedItemId) {
            toDoList.RemoveAll(item => item.ToDoId == deletedItemId);
        }
    }
}
