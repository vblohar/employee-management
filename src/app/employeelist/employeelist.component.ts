import { Component, Input } from '@angular/core';
import { EmpService } from '../emp-service.service';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.scss'
})
export class EmployeelistComponent {

  // @Input('viewTable') viewTable: boolean= false;
  employees: any;


  constructor(private empService: EmpService){

    this.empService.getEmplyees().subscribe({next: (val:any) =>{

      this.employees = val;
      console.log(this.employees);
      
    }
    });


  }

}
