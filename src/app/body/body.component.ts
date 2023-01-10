import { EventEmitter } from '@angular/core';
import { Component, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Output() editTask = new EventEmitter<any>();
  @Output() deleteTasks = new EventEmitter<any>();
  @Output() clearCompletedButton = new EventEmitter<any>();
  @Input() lists = [''];
  @ViewChild('selectAllCheckbox') isChecked: any;
  editIndex = -1;
  deleteTaskList: number[] = [];

  editButton(index: number) {
    this.editIndex = index;
  }

  doneButton(index: number, editTask: string ) {
    this.editIndex = -1;
    this.editTask.emit({index, editTask});
  }

  deleteButton(index: number) {
    this.deleteTasks.emit(index);
    if(this.deleteTaskList.includes(index)){
      let indexOf = this.deleteTaskList.indexOf(index);
      this.deleteTaskList.splice(indexOf, 1);
    }
  }

  onCheck(isChecked: boolean, index: number) {
    if(isChecked){
      this.deleteTaskList.push(index)
    }
    else{
      let indexOf = this.deleteTaskList.indexOf(index);
      this.deleteTaskList.splice(indexOf, 1);
    }
  }
  clearCompleted() {
    this.clearCompletedButton.emit(this.deleteTaskList);
    this.deleteTaskList = [];
    this.isChecked.nativeElement.checked = false;
  }

  onCheckSelectAll(isChecked: boolean) {
    this.deleteTaskList = [];
    if(isChecked && this.lists.length > 0){
      for(let i = 0; i < this.lists.length; i++){
        this.deleteTaskList = [...this.deleteTaskList, i]
      }
    }
    else {
      this.deleteTaskList = [];
    }
  }
}
