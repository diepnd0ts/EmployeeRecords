import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

  add(): void {
    this.employeeService.addEmployee(this.employee)
      .subscribe(employee => this.employees.push(employee));
    
    this.employee = new Employee();
  }

  delete(employee: Employee): void {
    this.employees = this.employees.filter(emp => emp !== employee);
    this.employeeService.deleteEmployee(employee).subscribe()
  }

  cancel(): void {
    this.employee = new Employee();
  }
  checkType(term: string) {
    return isNaN(Number(term));
  }
}
