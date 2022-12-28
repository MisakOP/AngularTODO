import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  editIndex = -1;
  deleteTaskList: number[] = [];
  lists = ['asd', 'asf4whr', 'wrhrwsdc'];

  ngOnInit() {
    document.addEventListener('keypress', (e) => this.onKeypress(e))
  }

  ngOnDestroy() {
    document.removeEventListener('keypress', (e) => this.onKeypress(e));
  }

  onKeypress(e: any) {
      let task = (<HTMLInputElement>document.getElementById('textInput'));
      let taskValue = task?.value ? task?.value.toString() : '';
      if(e.key === 'Enter'){
        this.lists.push(taskValue);
        if(task){
          task.value = '';
        }
      }
  }

  editButton(index: number) {
    this.editIndex = index;
  }

  doneButton(index: number) {
    let editTask = (<HTMLInputElement>document.getElementById('editText'));
    let editTaskValue = editTask.value;
    this.lists[index] = editTaskValue;
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
      console.log(this.deleteTaskList);
    for(let i =0; i < this.deleteTaskList.length; i++){
      this.lists.splice(this.deleteTaskList[i] - i, 1)
    }
    this.deleteTaskList = [];
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
