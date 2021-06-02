import { Injectable } from '@angular/core';
//import { IEmployee } from './employee';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Appointment } from './models/appointment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 //// private _url: string = "/assets/employee.json";
 private _url: string = "http://localhost:8088/App/application/getById/102"
 private _url1: string = "http://localhost:8088/App/application/user"
 private _url2: string = "http://localhost:8088/App/application/remove/101"
  constructor(private http:HttpClient) { }
  getEmployeesId(): Observable<Appointment>{
    return this.http.get<Appointment>(this._url);
                   // .catch(this.errorHandler);
  }
  getEmployees(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this._url1);
                   // .catch(this.errorHandler);
  }
  deleteEmployeesId(): Observable<Appointment>{
    return this.http.delete<Appointment>(this._url2);
                   // .catch(this.errorHandler);
  }
  addAppointment(app:Appointment):Observable<object>{
    alert(JSON.stringify(app));
    return this.http.post("http://localhost:8088/App/application/addappointment",app);
  }
  // getEmployees(){
  //   return this.http.get(this._url).pipe(Map((data:any[])))
  // }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
