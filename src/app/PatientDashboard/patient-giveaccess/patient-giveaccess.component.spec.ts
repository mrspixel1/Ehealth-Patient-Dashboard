import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGiveaccessComponent } from './patient-giveaccess.component';

describe('PatientGiveaccessComponent', () => {
  let component: PatientGiveaccessComponent;
  let fixture: ComponentFixture<PatientGiveaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGiveaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGiveaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
