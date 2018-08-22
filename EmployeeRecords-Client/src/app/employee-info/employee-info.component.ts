import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Location } from '@angular/common'
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  employee: Employee;
  nameCopy;
  phoneCopy;
  supervisorCopy;


  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getEmployee();
  }
  
  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee;
        this.nameCopy = employee.name;
        this.phoneCopy = employee.phoneNumber;
        this.supervisorCopy = employee.supervisor;
      });
  }

  save(): void {
    this.employeeService.updateEmployee(this.employee).subscribe();
  }

  delete(employee: Employee): void {
    this.employeeService.deleteEmployee(employee).subscribe(_ => this.goBack());
  }

  revert(): void {
    this.employee.name = this.nameCopy;
    this.employee.phoneNumber = this.phoneCopy;
    this.employee.supervisor = this.supervisorCopy
  }

  goBack(): void {
    this.location.back();
  }

}
