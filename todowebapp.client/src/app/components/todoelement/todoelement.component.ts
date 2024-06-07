import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreatetododialogComponent } from '../dialogs/createtododialog/createtododialog.component';
import { EdittododialogComponent } from '../dialogs/edittododialog/edittododialog.component';

interface ToDoElement {
  toDoId: number;
  toDoName: string;
  toDoDescription: string;
}

var newToDoId: number = 1;

@Component({
  selector: 'app-todoelement',
  templateUrl: './todoelement.component.html',
  styleUrl: './todoelement.component.css'
})

export class TodoelementComponent implements OnInit {
  public todoelements: ToDoElement[] = [];

  dialogData: { title: string, description: string } | null = null;

  constructor(private http: HttpClient, public createToDoDialog: MatDialog, public editToDoDialog: MatDialog) { }

  ngOnInit() {

  }

  //#region Dialogs

  openCreateToDoDialog(): void {
    const createToDoDialog = this.createToDoDialog.open(CreatetododialogComponent);

    createToDoDialog.afterClosed().subscribe(result => {
      if (result) {
        this.dialogData = result;

        if (this.dialogData == null) {
          this.createNewToDoItem("", "");
        }
        else {
          this.createNewToDoItem(this.dialogData.title, this.dialogData.description)
        }
      }
    })
  }

  openEditToDoDialog(editID: number, toDoName: string, toDoDescription: string): void {

    var updatedElement = <ToDoElement>{ toDoId: editID};

    const editToDoDialog = this.editToDoDialog.open(EdittododialogComponent, {
      data: { title: toDoName, description: toDoDescription }
    });

    editToDoDialog.afterClosed().subscribe(result => {
      this.dialogData = result;

      if (this.dialogData == null) {
        updatedElement.toDoName = "";
        updatedElement.toDoDescription = "";
      }
      else {
        updatedElement.toDoName = this.dialogData.title;
        updatedElement.toDoDescription = this.dialogData.description;
      }

      this.editToDoItem(editID, updatedElement);
    })
  }

  //#endregion

  //#region HTTP Methods

  //GET: Gets a list of all ToDoElements
  getToDoElements() {
    this.http.get<ToDoElement[]>('/api/todoelement').subscribe(
      (result) => {
        this.todoelements = result
        //this.todoelements.forEach(function (element) {
        //  element.toDoDescription = element.toDoDescription.replace(/\n/g, "<br>");
        //})
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //POST: Generates a new ToDoElement
  createNewToDoItem(inputName: string, inputDescription: string) {
    if (inputName == null) {
      inputName = "";
    }

    if (inputDescription == null) {
      inputDescription = "";
    }
    var newElement = <ToDoElement>{ toDoId: newToDoId, toDoName: inputName, toDoDescription: inputDescription};

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
  deleteToDoItem(deleteId: Number) {
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
  editToDoItem(editId: Number, updatedElement: ToDoElement) {

    this.http.put<ToDoElement>(`/api/todoelement/${editId}`, updatedElement).subscribe(
      (response: ToDoElement) => {
        this.getToDoElements();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  //#endregion
}
