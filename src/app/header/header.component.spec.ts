import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async () => {
    component = new HeaderComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('editHeaderButton', () => {
    it('should enable header edit (set editHeader variable to true)', () => {
      component.editHeaderButton();
      expect(component.editHeader).toBeTrue();
    });
  });

  describe('saveHeader', () => {
    it('should edit header text', () => {
      let headerValue = 'New Header';
      component.saveHeader(headerValue);
      expect(component.headerText).toEqual(headerValue);
    })

    it('should disable header edit (set editHeader variable to false)', () => {
      component.saveHeader('');
      expect(component.editHeader).toBeFalse();
    })
  });

  describe('saveTask', () => {
    it('should save task', () => {
      component.taskName = {nativeElement: {value: 'asd'}}
      spyOn(component.newTask, 'emit');
      component.saveTask('');
      expect(component.newTask.emit).toHaveBeenCalled();
    })

    it('should set the input to empty string', () => {
      component.taskName = {nativeElement: {value: 'asd'}}
      component.saveTask('');
      expect(component.taskName.nativeElement.value).toEqual('');
    });
  });
});
