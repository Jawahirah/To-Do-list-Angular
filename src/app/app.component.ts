import { Component } from '@angular/core';
import { ToDoItem } from '../shared/models/toDoItem'
import events from './../shared/services/EventService'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    events.listen('removeTask',(task:any)=>{
     let index=this.items.indexOf(task);
     this.items.splice(index,1);
    });
  }
  items: ToDoItem[] = [
    new ToDoItem('Having a job'),
    new ToDoItem('Buying a car'),
    new ToDoItem('Having a license'),
  ];

  filterTasks(item:any){
    return item;
  }

  
}
