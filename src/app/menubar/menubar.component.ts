import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent {

  @Output('showTable') showtable123: EventEmitter<any> = new EventEmitter<any>();


  showTable(event: any){

    this.showtable123.emit(event);
    console.log(event.target.value);

  }

}
