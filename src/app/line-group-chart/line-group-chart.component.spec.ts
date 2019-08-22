import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGroupChartComponent } from './line-group-chart.component';

describe('LineGroupChartComponent', () => {
  let component: LineGroupChartComponent;
  let fixture: ComponentFixture<LineGroupChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGroupChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGroupChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
