import { Component, Input } from '@angular/core';
import { ToDoItem } from '../../shared/models/toDoItem'


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: ToDoItem[]=[];
  // Check and uncheck the item in the to-do list
  toggleItem(toDOItem: ToDoItem) {
    toDOItem.isComplete = !toDOItem.isComplete;
    console.log(toDOItem)
  };
}
