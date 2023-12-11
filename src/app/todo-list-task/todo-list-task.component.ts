import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ToDoItem } from '../../shared/models/toDoItem'


@Component({
  selector: 'todo-list-task',
  templateUrl: './todo-list-task.component.html',
  styleUrl: './todo-list-task.component.css'
})
export class TodoListTaskComponent {
@Input() taskText!: string;
@Input() fulfilled!: boolean;
@Output() fulfilledChange= new EventEmitter<boolean>();

  // Check and uncheck the item in the to-do list
  toggleFulfilled() {
   this.fulfilled=!this.fulfilled;
   this.fulfilledChange.emit(this.fulfilled)
  };

  get cssClases(){
    return {'strike text-muted': this.fulfilled };
  };
}


