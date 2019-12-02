import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  public task;

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params.id);
  }

  getTask(id: number){
    this.taskService.getTask(id).subscribe(
      data => { this.task = data },
      err => console.log(err)
    );
  }

}
