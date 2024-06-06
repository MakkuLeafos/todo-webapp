import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ToDoElement {
  toDoId: number;
  toDoName: string;
  toDoDescription: string;
  toDoDueDate: string;
}

var newToDoId: number = 1;

@Component({
  selector: 'app-todoelement',
  templateUrl: './todoelement.component.html',
  styleUrl: './todoelement.component.css'
})

export class TodoelementComponent implements OnInit {
  public todoelements: ToDoElement[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(){
    //this.getToDoElements();
  }

  //GET: Gets a list of all ToDoElements
  getToDoElements() {
    this.http.get<ToDoElement[]>('/api/todoelement').subscribe(
      (result) => {
        this.todoelements = result
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //POST: Generates a new ToDoElement
  createNewToDoItem()
  {
    var newElement = <ToDoElement>{ toDoId: newToDoId, toDoName: "Test", toDoDescription: "Test description", toDoDueDate: "Test date" };

    this.http.post<ToDoElement>('/api/todoelement', newElement).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
        newToDoId++;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //DELETE: Deletes the ToDoElement with the specified ID
  deleteToDoItem(deleteId : Number)
  {
    this.http.delete<ToDoElement>(`/api/todoelement/${deleteId}`).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //PUT: Updates the ToDoElement with the specified ID
  editToDoItem(editId: Number)
  {
    var updatedElement = <ToDoElement>{ toDoId: editId, toDoName: "Test updated", toDoDescription: "Test description updated", toDoDueDate: "Test date" };

    this.http.put<ToDoElement>(`/api/todoelement/${editId}`, updatedElement).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
