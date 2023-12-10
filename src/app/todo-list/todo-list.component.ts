import { Component, Input } from '@angular/core';
import { ToDoItem } from '../../shared/models/toDoItem'


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: ToDoItem[]=[];



}
