import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  appointmentForm:FormGroup;
  appointments:Appointment[]=new Array();
  constructor() { }

  ngOnInit(): void {
    this.appointmentForm=new FormGroup({
      appointmentid:new FormControl(),
      appointmentdate:new FormControl(),
      appointmentstatus:new FormControl(),
      dtestid:new FormControl()
    });
  }
    // showAppointment():void{
    //   let app:Appointment=new Appointment(this.appo.controls.appointmentid.value,
    //     this.appointmentForm.controls.appointmentdate.value,
    //     this.appointmentForm.controls.approvalstatus.value,
    //     this.appointmentForm.controls.dtestid.value);
    //     this.appointments.push(app);
    // }

}
