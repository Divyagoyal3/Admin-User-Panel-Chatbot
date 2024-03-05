import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercontentComponent } from './uppercontent.component';

describe('UppercontentComponent', () => {
  let component: UppercontentComponent;
  let fixture: ComponentFixture<UppercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UppercontentComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UppercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
