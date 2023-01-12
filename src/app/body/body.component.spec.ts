import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent;

  beforeEach(() => {
    component = new BodyComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('editButton', () => {
    it('should editIndex value be equal to passed index', () => {
      let index = 2;
      component.editButton(index);
      expect(component.editIndex).toEqual(index);
    });
  });

  describe('doneButton', () => {
    it('should edit the task', () => {
      let index = 1;
      let editTask = 'Learn Angular';
      spyOn(component.editTask, 'emit');
      component.doneButton(index, editTask);

      expect(component.editTask.emit).toHaveBeenCalledWith({index, editTask});
      expect(component.editIndex).toEqual(-1);
    })
  });

  describe('deleteButton', () => {
    it('should delete the task and if checkbox checked shoudl remove it', () => {
      let index = 1;
      spyOn(component.deleteTasks, 'emit');
      component.deleteTaskList = [0,1,4,6];
      component.deleteButton(index);

      expect(component.deleteTasks.emit).toHaveBeenCalledWith(index);
      expect(component.deleteTaskList).not.toContain(index);
    });
  });

  describe('onCheck', () => {
    it('should push the index to deleteTaskList ', () => {
      let isChecked = true;
      let index = 1;
      component.onCheck(isChecked, index);

      expect(component.deleteTaskList).toContain(index);

    });

    it('should remove the index to deleteTaskList ', () => {
      let isChecked = false;
      let index = 3;
      component.onCheck(isChecked, index);

      expect(component.deleteTaskList).not.toContain(index);
    });
  });

  describe('clearCompleted', () => {
    it('should delete all checked tasks', () => {
      component.deleteTaskList = [0,2,3];
      component.isChecked = {nativeElement: {checked: true}};
      spyOn(component.clearCompletedButton, 'emit');
      component.clearCompleted();

      expect(component.clearCompletedButton.emit).toHaveBeenCalledWith([0,2,3]);
      expect(component.deleteTaskList).toEqual([]);
      expect(component.isChecked.nativeElement.checked).toBeFalse();
    });
  });

  describe('onCheckSelectAll', () => {
    it('should select all tasks or remove checked for all tasks', () => {
      let isChecked = true;
      component.lists = ['todo1', 'todo2', 'todo3'];
      component.onCheckSelectAll(isChecked);

      expect(component.deleteTaskList.length).toEqual(component.lists.length);
    });
  });
});
