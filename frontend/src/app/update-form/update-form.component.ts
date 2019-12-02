import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private taskService:TaskService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTask(this.route.snapshot.params.id);

    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  getTask(id: number){
    this.taskService.getTask(id).subscribe(
      data => { this.task = data },
      err => console.log(err)
    );
  }

  resubmitTask(){
    if(this.taskForm.valid){
      this.validMessage = "Item succesfully added to inventory";
      this.taskService.addTask(this.taskForm.value).subscribe(
        data => {
          this.taskForm.reset();
          return true;
        },
        error =>{
          return Observable.throw(error);
        }
      )
    } 
    else{
      this.validMessage = "Error, form is not complete yet";
    }
  }
}
