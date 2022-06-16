import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LispyjsInterpreterComponent } from './lispyjs-interpreter.component';

describe('LispyjsInterpreterComponent', () => {
  let component: LispyjsInterpreterComponent;
  let fixture: ComponentFixture<LispyjsInterpreterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LispyjsInterpreterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LispyjsInterpreterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
