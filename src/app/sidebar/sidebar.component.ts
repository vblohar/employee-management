import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  @Output('showList') showList123: EventEmitter<any> = new EventEmitter<any>();
  @Output('showForm') showForm123: EventEmitter<any> = new EventEmitter<any>();

  ShowempList(event: any){
    this.showList123.emit(event);
  }

  ShowempForm(event: any){
    this.showForm123.emit(event);
  }
}
