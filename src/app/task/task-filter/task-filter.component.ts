import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ToDoItem } from '../../../shared/models/toDoItem'

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

  @Input()  filter: any;
  @Output() filterChange= new EventEmitter<any>();

  //Initialization for this component 
  ngOnInit():void{
    this.updateFilter('0');
  }
  listFilter: String = '0';
  // Emit our filter event to the parent component 
  updateFilter(value: any){
    this.filter=filters[value];
    this.filterChange.emit(this.filter)
  }

}
