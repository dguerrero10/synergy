import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardPageComponent } from './main-dashboard-page.component';

describe('MainDashboardPageComponent', () => {
  let component: MainDashboardPageComponent;
  let fixture: ComponentFixture<MainDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardPageComponent]
    });
    fixture = TestBed.createComponent(MainDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
