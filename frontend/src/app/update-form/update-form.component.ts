import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  public task;
  taskForm: FormGroup;
  validMessage = ''; //message that will hold error info

  constructor(private taskService:TaskService, private route: ActivatedRoute, private router: Router, private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.taskForm = new FormGroup({
      task: new FormControl(),
      description: new FormControl(),
      deadline: new FormControl(),
      priority: new FormControl(),
      status: new FormControl(),
    })
    this.getTaskAndFillIn(this.route.snapshot.params.id);
  }

  getTaskAndFillIn(id: number){
    this.taskService.getTask(id).subscribe(
      data => {
        this.task = data;
        this.taskForm = this.formBuilder.group({
          priority: [data["priority"], [Validators.required]],
          task: [data["task"], [Validators.required]],
          description: [data["description"], [Validators.required]],
          status: [data["status"], [Validators.required]],
          deadline: [data["deadline"], [Validators.required]]
        });
      },
      err => console.log(err)
    );
  }

  resubmitTask(){
    if(this.taskForm.valid){
      this.validMessage = "Task successfully updated";
      this.taskService.updateTask(this.route.snapshot.params.id, this.taskForm.value).subscribe(
        data => {
          this.router.navigate(['/']);
        },
        error =>{
          return Observable.throw(error);
        }
      );
    }
    else{
      this.validMessage = "Error, form is not complete yet";
    }
  }
}
