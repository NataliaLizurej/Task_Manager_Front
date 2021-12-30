import { TestBed } from '@angular/core/testing';

import { DialogTaskService } from './dialog-task.service';

describe('DialogTaskService', () => {
  let service: DialogTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
