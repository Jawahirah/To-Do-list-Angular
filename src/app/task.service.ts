import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { error } from 'console';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTask(){
    return this.http.get('../assets/tasks.json').pipe(catchError(this.handleErorr))
    }

    private handleErorr(error : HttpErrorResponse){

      if(error.status == 0){
        console.log('Error from the client or network')
      }else{
        console.log('Error from the server')
      }
    return throwError(()=>new Error('Can not retrive data from the server. Please try again. '))
    }
}






