import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardSideNavComponent } from './main-dashboard-side-nav.component';

describe('MainDashboardSideNavComponent', () => {
  let component: MainDashboardSideNavComponent;
  let fixture: ComponentFixture<MainDashboardSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardSideNavComponent]
    });
    fixture = TestBed.createComponent(MainDashboardSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
