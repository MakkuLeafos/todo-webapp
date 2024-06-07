import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edittododialog',
  templateUrl: './edittododialog.component.html',
  styleUrl: './edittododialog.component.css'
})
export class EdittododialogComponent {

  title: string = '';
  description: string = '';

  constructor(
    public dialogRef: MatDialogRef<EdittododialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, description: string }) {
    this.title = data.title;
    this.description = data.description;
  }

  submit(): void {
    this.dialogRef.close({ title: this.title, description: this.description });
  }
}
