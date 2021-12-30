import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogDeleteTaskComponent } from 'src/app/components/dialog-delete-task/dialog-delete-task.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openDeleteTask(obj) {
    return this.dialog.open(DialogDeleteTaskComponent, {
      disableClose: true,
      data: {
        message: obj
      }
    });
  }
  
}
