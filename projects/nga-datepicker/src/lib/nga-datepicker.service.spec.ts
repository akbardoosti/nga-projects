import { TestBed } from '@angular/core/testing';

import { NgaDatepickerService } from './nga-datepicker.service';

describe('NgaDatepickerService', () => {
  let service: NgaDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgaDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
