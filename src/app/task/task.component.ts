import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../shared/models/toDoItem'
import {EventService} from './../../shared/services/EventService'

import { error } from 'console';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent  {
  items: ToDoItem[]=[];
  
  constructor(event:EventService){
     event.listen('removeTask',(task:any)=>{
     let index=this.items.indexOf(task);
     this.items.splice(index,1);
    });
  }

  filterTasks(item:any){
    return item;
  } 
}
