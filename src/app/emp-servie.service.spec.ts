import { TestBed } from '@angular/core/testing';

import { EmpService } from './emp-service.service';

describe('EmpServieService', () => {
  let service: EmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
