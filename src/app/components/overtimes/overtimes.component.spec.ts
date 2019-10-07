import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OvertimesComponent } from './overtimes.component';

describe('OvertimesComponent', () => {
  let component: OvertimesComponent;
  let fixture: ComponentFixture<OvertimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OvertimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OvertimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
