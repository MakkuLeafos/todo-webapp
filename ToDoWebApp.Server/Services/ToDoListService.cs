namespace ToDoWebApp.Server.Services
{
    using ToDoWebApp.Server.Classes;
    public interface IToDoListService 
    { 
        List<ToDoElement> GetList();
        void AddToDoElement(ToDoElement newElement);

        void DeleteToDoElement(int deletedItemId);

        void EditToDoElement(int editId, ToDoElement updatedElement);
    }

    public class ToDoListService : IToDoListService
    {
        private readonly List<ToDoElement> toDoList = new List<ToDoElement>();

        //HTTP Get
        public List<ToDoElement> GetList() 
        { 
            return toDoList;
        }

        //HTTP POST
        public void AddToDoElement(ToDoElement newElement)
        {
            toDoList.Add(newElement);
        }

        //HTTP DELETE
        public void DeleteToDoElement(int deletedItemId) 
        {
            toDoList.RemoveAll(item => item.ToDoId == deletedItemId);
        }

        //HTTP PUT
        public void EditToDoElement(int editId, ToDoElement updatedElement) 
        { 
            int oldElementIndex = toDoList.FindIndex(item => item.ToDoId == editId);
            toDoList[oldElementIndex] = updatedElement;
        }
    }
}
