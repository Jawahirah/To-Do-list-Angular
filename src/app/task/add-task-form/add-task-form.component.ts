import { Component,Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../../../shared/models/toDoItem'


@Component({
  selector: 'add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  newTaskText = '';
 
  @Output() addTask=new EventEmitter<ToDoItem>();

  // Add the task to the to-do list 
  addNewTask() {
    this.addTask.emit(new ToDoItem(this.newTaskText))
    this.newTaskText = '';
  };


}
