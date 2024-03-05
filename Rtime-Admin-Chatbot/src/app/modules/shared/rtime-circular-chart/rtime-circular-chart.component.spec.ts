import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtimeCircularChartComponent } from './rtime-circular-chart.component';

describe('RtimeCircularChartComponent', () => {
  let component: RtimeCircularChartComponent;
  let fixture: ComponentFixture<RtimeCircularChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtimeCircularChartComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RtimeCircularChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
