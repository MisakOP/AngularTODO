import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BodyComponent } from '../body/body.component';

@Component({
  providers: [BodyComponent],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  @Output() newTask = new EventEmitter<any>();
  @ViewChild('task') taskName: any;
  editHeader = false;
  headerText = "TODO list";
  task = '';
  date = new Date().toLocaleTimeString([], {year: '2-digit', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});

  editHeaderButton() {
    this.editHeader = true;
  }

  saveHeader(headerValue: string) {
    this.headerText = headerValue;
    this.editHeader = false;
  }

  saveTask(event: any) {
    this.newTask.emit(event);
    this.taskName.nativeElement.value = '';
  }
}
