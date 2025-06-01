import { TestBed } from '@angular/core/testing';

import { CoreuxService } from './coreux.service';

describe('CoreuxService', () => {
  let service: CoreuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
