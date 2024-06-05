import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ToDoElement {
  toDoName: string;
  toDoDescription: string;
  toDoDueDate: string;
}

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

  createNewToDo()
  {
    var newElement = <ToDoElement>{ toDoName:"Test", toDoDescription:"Test description", toDoDueDate: "Test date"};
    return this.http.post<ToDoElement>('/api/todoelement', newElement).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
