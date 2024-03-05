import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidewindowComponent } from './slidewindow.component';

describe('SlidewindowComponent', () => {
  let component: SlidewindowComponent;
  let fixture: ComponentFixture<SlidewindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidewindowComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SlidewindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
