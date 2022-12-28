import { Component, Input } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  editHeader = false;
  headerText = "TODO list";
  date = new Date().toLocaleTimeString([], {year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});

  editHeaderButton() {
    this.editHeader = true;
  }

  saveHeader() {
    let header = (<HTMLInputElement>document.getElementById('header-input'));
    let headerValue = header.value;
    this.headerText = headerValue;
    this.editHeader = false;
  }
}
