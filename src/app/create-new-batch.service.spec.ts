import { TestBed } from '@angular/core/testing';

import { CreateNewBatchService } from './create-new-batch.service';

describe('CreateNewBatchService', () => {
  let service: CreateNewBatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateNewBatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
