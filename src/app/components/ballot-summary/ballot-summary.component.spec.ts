import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotSummaryComponent } from './ballot-summary.component';

describe('BallotSummaryComponent', () => {
  let component: BallotSummaryComponent;
  let fixture: ComponentFixture<BallotSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
