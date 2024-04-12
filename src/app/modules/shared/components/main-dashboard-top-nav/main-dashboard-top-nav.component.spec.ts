import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardTopNavComponent } from './main-dashboard-top-nav.component';

describe('MainDashboardTopNavComponent', () => {
  let component: MainDashboardTopNavComponent;
  let fixture: ComponentFixture<MainDashboardTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardTopNavComponent]
    });
    fixture = TestBed.createComponent(MainDashboardTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
