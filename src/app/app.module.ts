import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { LoggedGuard } from './Guards/Logged/logged.guard';
import { TokenInterceptorService } from './Services/TokenInterceptor/token-interceptor.service';
import {MatTableModule} from '@angular/material/table';
import { TableLeaderComponent } from './components/table-leader/table-leader.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogAddTaskComponent } from './components/dialog-add-task/dialog-add-task.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { TableProgrammerComponent } from './components/table-programmer/table-programmer.component';
import { DialogDeleteTaskComponent } from './components/dialog-delete-task/dialog-delete-task.component';
import { DialogUpdateTaskComponent } from './components/dialog-update-task/dialog-update-task.component';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AccountComponent,
    TasksComponent,
    TableLeaderComponent,
    DialogAddTaskComponent,
    TableProgrammerComponent,
    DialogDeleteTaskComponent,
    DialogUpdateTaskComponent,
  ],
  entryComponents: [DialogUpdateTaskComponent, DialogAddTaskComponent, DialogDeleteTaskComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthGuard, LoggedGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
