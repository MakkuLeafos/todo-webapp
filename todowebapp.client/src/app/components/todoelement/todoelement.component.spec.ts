import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoelementComponent, ToDoElement } from './todoelement.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreatetododialogComponent } from '../dialogs/createtododialog/createtododialog.component';
import { EdittododialogComponent } from '../dialogs/edittododialog/edittododialog.component';

describe('TodoelementComponent', () => {
  let component: TodoelementComponent;
  let fixture: ComponentFixture<TodoelementComponent>;
  let http: HttpTestingController;
  let matDialog: MatDialog;
  let createToDoDialogRef: MatDialogRef<CreatetododialogComponent>;
  let editToDoDialogRef: MatDialogRef<EdittododialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [TodoelementComponent, CreatetododialogComponent, EdittododialogComponent],
      providers: [MatDialog, MatDialogRef]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoelementComponent);
    http = TestBed.inject(HttpTestingController);
    matDialog = TestBed.inject(MatDialog);
    component = fixture.componentInstance;
    createToDoDialogRef = TestBed.inject(MatDialogRef<CreatetododialogComponent>);
    editToDoDialogRef = TestBed.inject(MatDialogRef<EdittododialogComponent>);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create to do elements', () => {

    component.createNewToDoItem("Task 1", "Description 1");
    component.createNewToDoItem("Task 2", "Description 2");

  })

  it('should display the new to do elements', () => {

    component.getToDoElements();
  })

  it('should update a to do element', () => {

    let editElement: ToDoElement = { toDoId: 1, toDoName: "Task 1 updated", toDoDescription: "Description 1 updated"};

    component.editToDoItem(1, editElement);
  })

  it('should delete a to do element', () => {

    component.deleteToDoItem(1);
  })
});
