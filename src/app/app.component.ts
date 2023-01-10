import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
  fullList = ['todo1', 'todo2', 'todo3'];

  addNewTask(newTask: any) {
    this.fullList.push(newTask.target.value);
  }

  editElement(event: any) {
    this.fullList[event.index] = event.editTask;
  }

  removeElemets(index: number) {
    this.fullList.splice(index, 1);
  }

  clearCompleted(deleteTaskList: any) {
      for(let i =0; i < deleteTaskList.length; i++){
      this.fullList.splice(deleteTaskList[i] - i, 1)
    }
  }
}
