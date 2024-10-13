import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'empmanagement';

  viewTableevent: boolean=false;
  viewFormevent: boolean=false;

  constructor(){
    console.log(this.viewTable);
  }

  viewTable(){
    this.viewTableevent = !this.viewTableevent;
    this.viewFormevent = false;
    
  }

  viewForm(){
    this.viewFormevent = !this.viewFormevent;
    this.viewTableevent = false;
  }
}
