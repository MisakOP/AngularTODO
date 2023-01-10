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

  newList(tasks: any) {
    this.fullList = tasks;
  }
}
