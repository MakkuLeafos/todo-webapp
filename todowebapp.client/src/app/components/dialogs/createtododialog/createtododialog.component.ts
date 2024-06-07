import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createtododialog',
  templateUrl: './createtododialog.component.html',
  styleUrl: './createtododialog.component.css',

})
export class CreatetododialogComponent {

  title: string = '';
  description: string = '';

  constructor(public dialogRef: MatDialogRef<CreatetododialogComponent>) { }

  submit(): void {
    this.dialogRef.close({ title: this.title, description: this.description});
  }
}
