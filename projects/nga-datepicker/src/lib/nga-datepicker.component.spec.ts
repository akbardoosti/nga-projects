import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgaDatepickerComponent } from './nga-datepicker.component';

describe('NgaDatepickerComponent', () => {
  let component: NgaDatepickerComponent;
  let fixture: ComponentFixture<NgaDatepickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgaDatepickerComponent]
    });
    fixture = TestBed.createComponent(NgaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
