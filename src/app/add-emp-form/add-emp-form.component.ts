import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Employee } from '../employee';
import { EmpService } from '../emp-service.service';

@Component({
  selector: 'add-emp-form',
  templateUrl: './add-emp-form.component.html',
  styleUrl: './add-emp-form.component.scss',
})
export class AddEmpFormComponent implements OnInit, OnChanges {
  @Input() saveBtn: boolean = true;

  constructor(private empService: EmpService) {
    this.employees = this.empService.getEmplyees();
  }

  editMode: boolean = true;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  employees: Employee[] = [];
  employee: Employee = {
    id: 0,
    empName: '',
    empEmailId: '',
    empPhone: '',
    empAddress: '',
    empDept: '',
  };

  refreshList() {
    this.employees = this.empService.getEmplyees();
    console.log(this.employees);
  }

  addEmployee(event: any) {
    if (event.valid) {
      const index = this.employees.findIndex(
        (emp) => emp.empPhone === this.employee.empPhone
      );
      if (index != -1) {
        alert('Employee is already created');
      } else {
        this.employee.id = this.employees.length + 1;
        this.empService.addEmployee(this.employee);
        console.log(this.employee);

        this.employee = {
          id: 0,
          empName: '',
          empEmailId: '',
          empPhone: '',
          empAddress: '',
          empDept: '',
        };
        this.refreshList();
      }
    }
  }

  ngOnInit() {
    /* this.empService.selectedEmployee$.subscribe((employee) => {
      if (employee) {
        this.employee = { ...employee };
      }
    });*/
    this.employee = this.empService.selectedEmployee
      ? this.empService.selectedEmployee
      : this.employee;
  }

  updateEmployee() {
    const index = this.employees.findIndex(
      (emp) => emp.id === this.employee.id
    );
    if (index !== -1) {
      this.employees[index] = this.employee;
    }
    this.employee = {
      id: 0,
      empName: '',
      empEmailId: '',
      empPhone: '',
      empAddress: '',
      empDept: '',
    };
  }
}
