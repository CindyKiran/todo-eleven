import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateFormComponent } from './update-form/update-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NavigationComponent,
    TaskComponent,
    FormComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
