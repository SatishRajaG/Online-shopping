import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointments';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {
  private _url: string = "http://localhost:8083/api/appointment/2"
  constructor(private http:HttpClient) { }
  getAppointmentsId(): Observable<Appointment>{
    return this.http.get<Appointment>(this._url);
                   // .catch(this.errorHandler);
  }
  addAppointment(app: Appointment):Observable<Appointment[]>{
    return this.http.post<Appointment[]>(
      `http://localhost:8083/api/appointment/addappointment`,app
    );
  }
}
