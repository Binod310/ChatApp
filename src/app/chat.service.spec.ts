import { TestBed } from '@angular/core/testing';

import { ChatserverserviceService } from './chatserverservice.service';

describe('ChatserverserviceService', () => {
  let service: ChatserverserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatserverserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
