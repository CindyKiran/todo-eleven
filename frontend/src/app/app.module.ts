import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './task.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NavigationComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
