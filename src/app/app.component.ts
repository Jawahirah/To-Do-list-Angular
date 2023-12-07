import { Component } from '@angular/core';
import {ToDoItem} from '../shared/models/toDoItem'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items :ToDoItem[] =[]
  newTaskText='';
  title = 'todolist';

  // Add the task to the to-do list 
  addNewTask(){
    this.items.push(new ToDoItem(this.newTaskText));
    this.newTaskText='';
  }

  clearTextBox(){

  }
  // Check and uncheck the item in the to-do list
  toggleItem(toDOItem:ToDoItem){
    toDOItem.isComplete=!toDOItem.isComplete;
    console.log(toDOItem)
  }
}
