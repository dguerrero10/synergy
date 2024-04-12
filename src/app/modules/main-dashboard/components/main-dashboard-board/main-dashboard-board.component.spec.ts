import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardBoardComponent } from './main-dashboard-board.component';

describe('MainDashboardBoardComponent', () => {
  let component: MainDashboardBoardComponent;
  let fixture: ComponentFixture<MainDashboardBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDashboardBoardComponent]
    });
    fixture = TestBed.createComponent(MainDashboardBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
