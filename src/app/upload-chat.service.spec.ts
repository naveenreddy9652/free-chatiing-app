import { TestBed } from '@angular/core/testing';

import { UploadChatService } from './upload-chat.service';

describe('UploadChatService', () => {
  let service: UploadChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
