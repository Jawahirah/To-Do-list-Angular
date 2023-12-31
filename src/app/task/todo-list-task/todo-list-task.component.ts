import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ToDoItem } from '../../../shared/models/toDoItem'
import {EventService} from '../../../shared/services/EventService'


@Component({
  selector: 'todo-list-task',
  templateUrl: './todo-list-task.component.html',
  styleUrl: './todo-list-task.component.css'
})
export class TodoListTaskComponent {
constructor(private event: EventService){

}

@Input() task!: ToDoItem;


  // Check and uncheck the item in the to-do list
  toggleFulfilled() {
    this.task.isComplete = !this.task.isComplete;
  };

  get cssClases(){
    return {'strike text-muted': this.task.isComplete };
  };

  removeTask(){
    this.event.emit('removeTask',this.task);
  }
}


