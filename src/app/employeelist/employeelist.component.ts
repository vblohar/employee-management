import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EmpService } from '../emp-service.service';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrl: './employeelist.component.scss'
})
export class EmployeelistComponent implements OnChanges {

  
  employees: any;


  constructor(private empService: EmpService){

    this.empService.getEmplyees().subscribe({next: (val:any) =>{

      this.employees = val;
      console.log(this.employees);
      
    }
    });


  }
  ngOnChanges(changes: SimpleChanges): void {
    
}

refreshList(){
  this.empService.getEmplyees().subscribe({next: (val:any) =>{

  this.employees = val; }
});
}
  deleteEmpById(empid: number){
    console.log(empid);
    this.empService.deleteEmployee(empid).subscribe(
      ()=> alert('Employee Successfully Deleted!')
      
    );
    this.refreshList();
      
    
  }

  
}
