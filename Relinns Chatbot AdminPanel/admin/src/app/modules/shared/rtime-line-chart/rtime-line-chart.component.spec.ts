import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtimeLineChartComponent } from './rtime-line-chart.component';

describe('RtimeLineChartComponent', () => {
  let component: RtimeLineChartComponent;
  let fixture: ComponentFixture<RtimeLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtimeLineChartComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RtimeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
