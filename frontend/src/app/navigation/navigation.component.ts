import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }



}
