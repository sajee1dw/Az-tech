import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCardListComponent } from './investor-card-list.component';

describe('InvestorCardListComponent', () => {
  let component: InvestorCardListComponent;
  let fixture: ComponentFixture<InvestorCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
