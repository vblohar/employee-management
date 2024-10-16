import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmpService } from '../emp-service.service';
import { Employee } from '../employee';
import { AppComponent } from '../app.component';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.scss',
})
export class EmployeelistComponent implements OnChanges {
  employees: Employee[];

  employee: Employee = {
    id: 0,
    empName: '',
    empEmailId: '',
    empPhone: '',
    empAddress: '',
    empDept: '',
  };

  constructor(private empService: EmpService, private app: AppComponent) {
    this.employees = this.empService.getEmplyees();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  refreshList() {
    this.employees = this.empService.getEmplyees();
  }

  deleteEmpById(empid: number) {
    console.log(empid);
    this.empService.deleteEmployee(empid);
    this.refreshList();
  }
  editEmployee(emp: Employee) {
    console.log(emp);
    this.empService.selectEmployee(emp);
    this.app.viewForm();
  }
}
