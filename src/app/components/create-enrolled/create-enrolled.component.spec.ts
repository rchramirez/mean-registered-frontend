import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnrolledComponent } from './create-enrolled.component';

describe('CreateEnrolledComponent', () => {
  let component: CreateEnrolledComponent;
  let fixture: ComponentFixture<CreateEnrolledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEnrolledComponent]
    });
    fixture = TestBed.createComponent(CreateEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
