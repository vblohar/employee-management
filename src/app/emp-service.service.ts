import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Employee {
  id: string;
  empName: string;
  empId: string;
  empPhone: string;
  empAddress: string;
  empDept: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  employees: Employee[] = [
    {
      id: '1',
      empName: 'Ramesh',
      empId: 'ramesh@abc.com',
      empPhone: '458968566',
      empAddress: 'Pune',
      empDept: 'Marketing',
    },
    {
      id: '3',
      empName: 'Ramesh',
      empId: 'ramesh@abc.com',
      empPhone: '458968566',
      empAddress: 'Pune',
      empDept: 'Marketing',
    },
  ];

  constructor() {
    console.log(this.employees);
  }

  getEmplyees() {
    return this.employees;
  }

  deleteEmployee(id: any) {
    this.employees = this.employees.filter((emp) => emp.id !== id);
  }
}
