import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTaskFormComponent,
    TaskFilterComponent,
    TodoListTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
