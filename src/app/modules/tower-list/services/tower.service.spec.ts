import { TestBed } from '@angular/core/testing';

import { TowerCardService } from './tower.service';

describe('TowerCardService', () => {
  let service: TowerCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TowerCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
