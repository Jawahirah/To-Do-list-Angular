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
  listFilter: String = '0';
  


  get visibleTasks():  ToDoItem[]{
    let taskStatus= this.listFilter;
    if (taskStatus == '0') {
      return this.items;
    } else if (taskStatus == '1') {
      return this.items.filter(task=>!(task.isComplete));
    } else {
      return this.items.filter(task=>task.isComplete);
    }
  };

}
