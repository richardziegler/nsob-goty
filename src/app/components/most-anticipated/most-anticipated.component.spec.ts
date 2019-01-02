import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostAnticipatedComponent } from './most-anticipated.component';

describe('MostAnticipatedComponent', () => {
  let component: MostAnticipatedComponent;
  let fixture: ComponentFixture<MostAnticipatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostAnticipatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostAnticipatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
