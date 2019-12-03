import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private loaded: boolean = false;
  public tasks;
  public currentDate = new Date();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.taskService.displayAll().subscribe(
      data => {
        this.tasks = data;
        this.loaded = true;
        this.currentDate = new Date();
              },
      err => console.log(err)
    );
  }

  isCheckedValue(status: boolean): string {
    return this.taskService.isCheckedValue(status);
  }



}
