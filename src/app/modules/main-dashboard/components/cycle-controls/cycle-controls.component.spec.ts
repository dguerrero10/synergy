import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleControlsComponent } from './cycle-controls.component';

describe('CycleControlsComponent', () => {
  let component: CycleControlsComponent;
  let fixture: ComponentFixture<CycleControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CycleControlsComponent]
    });
    fixture = TestBed.createComponent(CycleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
