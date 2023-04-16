import { TestBed } from '@angular/core/testing';

import { Marvellousservice } from './marvellous.service';

describe('MarvellousService', () => {
  let service: Marvellousservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Marvellousservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
