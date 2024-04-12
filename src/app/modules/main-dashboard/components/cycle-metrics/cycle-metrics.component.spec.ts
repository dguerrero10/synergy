import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleMetricsComponent } from './cycle-metrics.component';

describe('CycleMetricsComponent', () => {
  let component: CycleMetricsComponent;
  let fixture: ComponentFixture<CycleMetricsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CycleMetricsComponent]
    });
    fixture = TestBed.createComponent(CycleMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
