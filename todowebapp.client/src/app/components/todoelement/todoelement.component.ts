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

  //GET
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

  //POST
  createNewToDoItem()
  {
    var newElement = <ToDoElement>{ toDoId:newToDoId, toDoName:"Test", toDoDescription:"Test description", toDoDueDate: "Test date"};
    return this.http.post<ToDoElement>('/api/todoelement', newElement).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
        newToDoId++;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //DELETE
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
}
