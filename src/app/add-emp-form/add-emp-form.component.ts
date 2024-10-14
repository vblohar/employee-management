import { Component } from '@angular/core';

@Component({
  selector: 'add-emp-form',
  templateUrl: './add-emp-form.component.html',
  styleUrl: './add-emp-form.component.scss'
})
export class AddEmpFormComponent {
  empName: string='';

submitEmp(){
  console.log("Save" );
}


getFuction() {

  return {
    "Employeenane": this.empName
  }
}

}
