import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAccountPageComponent } from './manage-account-page.component';

describe('ManageAccountPageComponent', () => {
  let component: ManageAccountPageComponent;
  let fixture: ComponentFixture<ManageAccountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAccountPageComponent]
    });
    fixture = TestBed.createComponent(ManageAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
