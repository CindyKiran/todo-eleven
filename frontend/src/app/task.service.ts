import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}
  
  //methods to send http request to backend server
  addTask(task){
    let body = JSON.stringify(task);
    return this.http.post('/server/tasks', body, httpOption);
  }

  getTask(id: number){
    return this.http.get('/server/tasks/'+id);
  }

  displayAll(){
    return this.http.get('/server/tasks');
  }

  updateTask(id: number, task: any){
    let body = JSON.stringify(task);
    return this.http.put('/server/tasks/'+id, task, httpOption );
  }
}

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
