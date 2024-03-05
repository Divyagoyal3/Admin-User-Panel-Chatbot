import { AllUsersService } from './all-users.service';
import { TestBed } from '@angular/core/testing';


describe('AllUsersService', () => {
  let service: AllUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
