import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { professionalInvestorProfileComponent } from './investor-profile.component';

describe('InvestorProfileComponent', () => {
  let component: professionalInvestorProfileComponent;
  let fixture: ComponentFixture<professionalInvestorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ professionalInvestorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(professionalInvestorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
