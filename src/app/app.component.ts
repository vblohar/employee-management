import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'empmanagement';

  viewTableevent: boolean = true;
  viewFormevent: boolean = false;

  constructor() {
    console.log(this.viewTable);
  }

  viewTable() {
    this.viewTableevent = true;
    this.viewFormevent = false;
  }

  viewForm() {
    this.viewFormevent = true;
    this.viewTableevent = false;
  }
}
