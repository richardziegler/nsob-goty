import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestgameComponent } from './bestgame.component';

describe('BestgameComponent', () => {
  let component: BestgameComponent;
  let fixture: ComponentFixture<BestgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
