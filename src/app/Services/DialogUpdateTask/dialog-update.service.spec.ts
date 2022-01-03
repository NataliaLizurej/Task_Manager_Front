import { TestBed } from '@angular/core/testing';

import { DialogUpdateService } from './dialog-update.service';

describe('DialogUpdateService', () => {
  let service: DialogUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
