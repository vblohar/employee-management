import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmpService } from '../emp-service.service';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.scss',
})
export class EmployeelistComponent implements OnChanges {
  employees: any;

  constructor(private empService: EmpService) {
    this.employees = this.empService.getEmplyees();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  refreshList() {
    this.employees = this.empService.getEmplyees();
  }

  deleteEmpById(empid: string) {
    console.log(empid);
    this.empService.deleteEmployee(empid);
    this.refreshList();
  }
}
