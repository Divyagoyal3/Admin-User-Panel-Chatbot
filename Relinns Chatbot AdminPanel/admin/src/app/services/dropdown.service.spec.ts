import { DropdownService } from './dropdown.service';
import { TestBed } from '@angular/core/testing';


describe('DropdownService', () => {
  let service: DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
