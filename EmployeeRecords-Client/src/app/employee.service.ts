import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private employeesUrl = 'http://localhost:8080/api/employee'; //URL to employees api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        tap(_ => this.log(`fetched employee id=${id}`)),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  getEmployees():  Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log("Fetching all employees")),
        catchError(this.handleError<Employee[]>("getEmployees", []))
      )
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post(this.employeesUrl, employee, httpOptions)
      .pipe(
        tap((employee: Employee) => this.log(`added employee with id=${employee.id}`)),
        catchError(this.handleError<Employee>('addEmployee'))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeesUrl}/${employee.id}`;
    return this.http.post(url, employee, httpOptions)
      .pipe(
        tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))
      );
  }

  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee: employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleted employee id=${id}`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
      )
  }

  searchEmployee(term: string): Observable<Employee[]> {
    if (!term.trim()) { return of([]) };
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found employee name matching "${term}"`)),
        catchError(this.handleError<Employee[]>('searchEmployee', []))
      );
  }

  private log(message: string): void {
      this.messageService.add(`EmployeeService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
