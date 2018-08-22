import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({ name: 'searchByIdOrName' })
export class SearchByIdOrNamePipe implements PipeTransform {

  transform(employees: Employee[], term: string, type: string)  {
    if (!term) return employees;
    if (type === "id") {
      return employees.filter(employee => employee.id.toString().includes(term) );
    }
    if (type === "name") {
      return employees.filter(employee => (employee.name.toLocaleLowerCase()).indexOf(term) >= 0);
    }
  }

}
