import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../shared/models/toDoItem'
import {EventService} from './../shared/services/EventService'
import {TaskService} from './task.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(event:EventService, private taskService: TaskService){
    // Listent to remove task event 
     event.listen('removeTask',(task:any)=>{
     let index=this.items.indexOf(task);
     this.items.splice(index,1);
    });
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((data:any)=>{
      this.items=data;
    });
  }
  // items: ToDoItem[]=[
  //   new ToDoItem('First task')
  // ];

  items!: ToDoItem[];

  filterTasks(item:any){
    return item;
  } 
  // filterTasks:any;
}
