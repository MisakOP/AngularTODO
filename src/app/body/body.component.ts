import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() lists = [''];
  @ViewChild('selectAllCheckbox') isChecked: any;
  editIndex = -1;
  deleteTaskList: number[] = [];

  editButton(index: number) {
    this.editIndex = index;
  }

  doneButton(index: number, editTask: string ) {
    this.lists[index] = editTask;
    this.editIndex = -1;
  }

  deleteButton(index: number) {
    this.lists.splice(index, 1);
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
    for(let i =0; i < this.deleteTaskList.length; i++){
      this.lists.splice(this.deleteTaskList[i] - i, 1)
    }
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
