import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfForm1Component } from './rf-form1.component';

describe('RfForm1Component', () => {
  let component: RfForm1Component;
  let fixture: ComponentFixture<RfForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
