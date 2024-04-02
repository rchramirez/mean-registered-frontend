import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnrolledsComponent } from './list-enrolleds.component';

describe('ListEnrolledsComponent', () => {
  let component: ListEnrolledsComponent;
  let fixture: ComponentFixture<ListEnrolledsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEnrolledsComponent]
    });
    fixture = TestBed.createComponent(ListEnrolledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
