import { LogoutService } from './logout.service';
import { TestBed } from '@angular/core/testing';


describe('LogoutService', () => {
  let service: LogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
