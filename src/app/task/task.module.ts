import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';
import { TaskComponent } from './task.component';



@NgModule({
  declarations: [
    TodoListComponent,
    AddTaskFormComponent,
    TaskFilterComponent,
    TodoListTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
   TaskComponent
  ]
})
export class TaskModule { }
