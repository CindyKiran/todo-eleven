import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  private loaded: boolean = false;
  public task: any;

  constructor(private taskService: TaskService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.getTask(this.route.snapshot.params.id);
    //console.log(this.route.snapshot.params.id);
  }

  getTask(id: number){

    this.taskService.getTask(id).subscribe(
      data => {
        //console.log(data);
        this.task = data;
        this.loaded = true;
      },
      err => console.log(err)
    );
  }

  isCheckedValue(status: boolean): string {
    return this.taskService.isCheckedValue(status);
  }

}
