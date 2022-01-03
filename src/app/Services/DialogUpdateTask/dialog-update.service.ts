import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogUpdateTaskComponent } from 'src/app/components/dialog-update-task/dialog-update-task.component';


@Injectable({
  providedIn: 'root'
})
export class DialogUpdateService {

  constructor(private dialog: MatDialog) { } 
  declare s: string;

  openUpdateTask(obj) {
    return this.dialog.open(DialogUpdateTaskComponent, {
      disableClose: true,
      data: {
        message: obj
      }
    });
  }

  updateForm: FormGroup = new FormGroup({
    status: new FormControl('',Validators.required)
  })

  getStatus() {
  return this.updateForm.get('status').value
  }

}
