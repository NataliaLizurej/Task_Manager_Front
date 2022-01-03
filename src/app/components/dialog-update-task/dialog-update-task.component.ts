import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogUpdateService } from 'src/app/Services/DialogUpdateTask/dialog-update.service';
import { UserService } from 'src/app/Services/UserService/user.service';



@Component({
  selector: 'app-dialog-update-task',
  templateUrl: './dialog-update-task.component.html',
  styleUrls: ['./dialog-update-task.component.css']
})
export class DialogUpdateTaskComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DialogUpdateTaskComponent>, public dialogUpdateService: DialogUpdateService, public userService: UserService) { }

  declare role: any;

  ngOnInit(): void {
    this.getDetail();
  }


  getDetail() {
    this.userService.getUserDetail(localStorage.getItem('user_id')).subscribe(
      value => {
        this.role = value.role;
      }
    )
  }

    // If role = Team Leader return True
    isTeamLeader() {
      if(this.role == "Team Leader") {
        return true;
      } else {
        return false;
      }
    }

}
