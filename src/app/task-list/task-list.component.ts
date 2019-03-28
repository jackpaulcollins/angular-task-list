import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(taskToEdit: Task) {
    console.log({taskToEdit});
    this.clickSender.emit(taskToEdit);
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "red";
    } else if (currentTask.priority === 2){
      return "orange";
    } else {
      return "blue";
    }
  }
  constructor() { }

  ngOnInit() {
  }
}
