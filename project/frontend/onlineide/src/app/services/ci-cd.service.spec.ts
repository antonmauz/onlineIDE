import { TestBed } from '@angular/core/testing';

import { CiCdService } from './ci-cd.service';

describe('CiCdService', () => {
  let service: CiCdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiCdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
