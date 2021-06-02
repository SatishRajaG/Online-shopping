import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-rf-form',
  templateUrl: './rf-form.component.html',
  styleUrls: ['./rf-form.component.css']
})
export class RfFormComponent implements OnInit {
  appointmentForm:FormGroup;
  appointments:Appointment[];
  constructor(private fb:FormBuilder,private service:EmployeeService) {
    this.appointments=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init method");
    this.appointmentForm=this.fb.group({
      appointmentid:['',Validators.required],
      dtestid:['',Validators.required],
      appointmentdate:['',Validators.required],
      approvalstatus:['',Validators.required],
      testResult:['',Validators.required],
      patient:['',Validators.required],
      diagnosticCenter:['',Validators.required]
    });
    this.service.getEmployees().subscribe(data=>{
      alert("Get all method:");
      console.log(data);
      this.appointments=data;
    });
  }
  // appointmentid:new FormControl(),
  // appointmentdate:new FormControl(),
  // appointmentstatus:new FormControl(),
  // dtestid:new FormControl()
  //addAppointment():void{
    // let app:Appointment=new Appointment(this.appointmentForm.controls.appointmentid.value,
    //   this.appointmentForm.controls.appointmentdate.value,
    //   this.appointmentForm.controls.approvalstatus.value,
    //   this.appointmentForm.controls.dtestid.value);
      // this.service.addAppointment(app).subscribe(data =>{
      //   alert("data: "+JSON.stringify(data));
      //   this.appointments.push(app);
    //  })
 /// }

}
