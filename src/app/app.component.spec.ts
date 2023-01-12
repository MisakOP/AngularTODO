import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  describe('addNewTask', () => {
    it('should add new task to the list', () => {
      let newTask = {target: {value: 'Learn Angular'}};
      component.addNewTask(newTask);
      expect(component.fullList.includes(newTask.target.value)).toBeTrue();
    })
  });

  describe('editElement', () => {
    it('should edit the task', () => {
      let event = {index: 1, editTask: 'edited task'};
      component.editElement(event);
      expect(component.fullList[event.index]).toEqual(event.editTask);
    });
  });

  describe('removeElements', () => {
    it('should remove element from list', () => {
      let index = 1;
      let taskToRemove = component.fullList[index];
      component.removeElemets(index);
      expect(component.fullList.includes(taskToRemove)).toBeFalse();
    });
  });

  describe('clearCompleted', () => {
    it('should delete checked tasks', () => {
      let listLength = component.fullList.length;
      let deleteTaskList = [0,2];
      component.clearCompleted(deleteTaskList);
      expect(component.fullList.length).toBeLessThan(listLength);
    });
  });
});
