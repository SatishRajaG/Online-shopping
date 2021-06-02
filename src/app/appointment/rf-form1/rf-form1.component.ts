import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment,  Centers } from '../appointments';
import { AppointmentserviceService } from '../appointmentservice.service';

@Component({
  selector: 'app-rf-form1',
  templateUrl: './rf-form1.component.html',
  styleUrls: ['./rf-form1.component.css']
})
export class RfForm1Component implements OnInit {
appointmentForm:FormGroup;
appointments:Appointment[];
centers:Centers[];
  constructor(private fb:FormBuilder,private service:AppointmentserviceService) { 
    this.appointments=new Array();
  }

  ngOnInit(): void {
  //  console.log("ng on init");
  //  this.appointmentForm=this.fb.group({
    
  //  })
  }show(): void{

let cen:Centers=new Centers(
  this.appointmentForm.controls.id.value,
  this.appointmentForm.controls.cname.value,
  this.appointmentForm.controls.contactno.value,
  this.appointmentForm.controls.address.value,
  this.appointmentForm.controls.contactemail.value,
  this.appointmentForm.controls.servicesoffered.value
);
let app:Appointment=new Appointment(
  this.appointmentForm.controls.id.value,
  this.appointmentForm.controls.appointmentdate.value,
 this.appointmentForm.controls.approvalstatus.value,
  cen
);
this.appointments.push(app);
 this.service.addAppointment(app).subscribe((data)=>{
   //alert("data:",JSON.stringify(data));
 });
  }
}
