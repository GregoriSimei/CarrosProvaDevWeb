import { TestBed } from '@angular/core/testing';

import { CarroControllerService } from './carro-controller.service';

describe('CarroControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarroControllerService = TestBed.get(CarroControllerService);
    expect(service).toBeTruthy();
  });
});
