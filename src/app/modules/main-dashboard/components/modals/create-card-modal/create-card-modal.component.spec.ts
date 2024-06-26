import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardModalComponent } from './create-card-modal.component';

describe('CreateCardModalComponent', () => {
  let component: CreateCardModalComponent;
  let fixture: ComponentFixture<CreateCardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCardModalComponent]
    });
    fixture = TestBed.createComponent(CreateCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
