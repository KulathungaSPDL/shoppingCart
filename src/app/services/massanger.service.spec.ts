import { TestBed } from '@angular/core/testing';

import { MassangerService } from './massanger.service';

describe('MassangerService', () => {
  let service: MassangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MassangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
