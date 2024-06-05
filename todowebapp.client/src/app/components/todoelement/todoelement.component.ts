import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ToDoElement {
  id: number;
  toDoName: string;
  toDoDescription: string;
  toDoDueDate: Date;
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
    this.getToDoElements();
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
}
