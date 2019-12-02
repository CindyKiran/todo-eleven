import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  taskForm: FormGroup;
  validMessage = ''; //message that will hold error info

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      task: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      deadline: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  submitTask(){
    if(this.taskForm.valid){
      this.validMessage = "Task successfully updated";
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
