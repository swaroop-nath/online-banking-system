import { TestBed } from '@angular/core/testing';

import { TrainerServiceService } from './trainer-service.service';

describe('TrainerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainerServiceService = TestBed.get(TrainerServiceService);
    expect(service).toBeTruthy();
  });
});
