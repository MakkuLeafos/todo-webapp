namespace ToDoWebApp.Server.Classes
{
    public class ToDoElement
    {
        private int toDoId;
        private string toDoTitle;
        private string toDoDescription;
        private DateTime? toDoDueDate;

        /// <summary>
        /// Generates an ToDoElement Object (Constructor)
        /// </summary>
        /// <param name="id">ID of the ToDoElement</param>
        /// <param name="title">Title of the ToDoElement</param>
        /// <param name="description"></param>
        /// <param name="dueDate"></param>
        public ToDoElement(int id, string title, string description = "", DateTime? dueDate = null)
        {
            toDoId = id;
            toDoTitle = title;
            toDoDescription = description;
            toDoDueDate = dueDate;
        }

        /// <summary>
        /// Gets the ID of the ToDo task
        /// </summary>
        /// <returns>ToDo task ID</returns>
        public int GetId()
        {
            return toDoId;
        }

        /// <summary>
        /// Gets the title of the ToDo task
        /// </summary>
        /// <returns>ToDo task title</returns>
        public string GetTitle()
        {
            return toDoTitle;
        }

        /// <summary>
        /// Sets the title of the ToDo task
        /// </summary>
        /// <param name="title">Setting value for the ToDo task title</param>
        public void SetTitle(string title)
        {
            toDoTitle = title;
        }

        /// <summary>
        /// Gets the descritption of the ToDo task
        /// </summary>
        /// <returns>ToDo task description</returns>
        public string GetDescription()
        {
            return toDoDescription;
        }

        /// <summary>
        /// Sets the description of the ToDo task
        /// </summary>
        /// <param name="description">Setting value for the ToDo task description</param>
        public void SetDescription(string description)
        {
            toDoDescription = description;
        }

        /// <summary>
        /// Gets the due date of the ToDo task
        /// </summary>
        /// <returns>ToDo task due date</returns>
        public DateTime? GetDueDate() 
        {
            return toDoDueDate;
        }

        /// <summary>
        /// Sets the due date of the ToDo task
        /// </summary>
        /// <param name="dueDate">Setting value for the ToDo task due date</param>
        public void SetDueDate(DateTime dueDate)
        { 
            toDoDueDate=dueDate;
        }

    }
}
