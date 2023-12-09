import { Component,Output,EventEmitter } from '@angular/core';
import { ToDoItem } from '../../shared/models/toDoItem'

const filters=[
  (item:ToDoItem)=>item,
  (item:ToDoItem)=>!item.isComplete,
  (item:ToDoItem)=>item.isComplete,
]
@Component({
  selector: 'task-filter',
  templateUrl: './task-filter.component.html',
  styleUrl: './task-filter.component.css'
})
export class TaskFilterComponent {
  listFilter: String = '0';
  @Output() filter= new EventEmitter<any>();

  //Initialization for this component 
  ngOnInit():void{
    this.changeFilter('0');
  }

  // Emit our filter event to the parent component 
  changeFilter(value: any){
    this.filter.emit(filters[value])
  }

}
