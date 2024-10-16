import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  employees: Employee[] = [
    {
      id: 1,
      empName: 'Ramesh',
      empEmailId: 'ramesh@abc.com',
      empPhone: '458968566',
      empAddress: 'Pune',
      empDept: 'Marketing',
    },
    {
      id: 2,
      empName: 'Ganesh',
      empEmailId: 'ganesh@abc.com',
      empPhone: '968566',
      empAddress: 'Pimpri',
      empDept: 'Computor',
    },
  ];

  /*private selectedEmployeeSubject = new BehaviorSubject<Employee | null>(null);
  selectedEmployee$ = this.selectedEmployeeSubject.asObservable();*/

  selectedEmployee!: Employee;

  constructor() {
    console.log(this.employees);
  }

  getEmplyees() {
    return this.employees;
  }

  deleteEmployee(id: any) {
    console.log('deleted Emplyee id: ', id);
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  selectEmployee(employee: Employee) {
    // this.selectedEmployeeSubject.next(employee);
    this.selectedEmployee = employee;
  }
}
