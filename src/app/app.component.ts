import { Component } from '@angular/core';
import { ToDoItem } from '../shared/models/toDoItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items: ToDoItem[] = [
    new ToDoItem('Having a job'),
    new ToDoItem('Buying a car'),
    new ToDoItem('Having a license'),
  ];

  filterTasks(item:any){
    return item;
  }

}
