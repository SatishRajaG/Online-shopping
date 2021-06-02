import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees;
  public emp:Appointment;
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployeesId().subscribe(data => this.emp = data,
      error => this.errorMsg = error);
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
        error => this.errorMsg = error);
        this._employeeService.deleteEmployeesId().subscribe(data => this.emp = data,
          error => this.errorMsg = error);
  }

}
