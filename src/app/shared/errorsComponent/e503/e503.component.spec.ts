import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E503Component } from './e503.component';

describe('E503Component', () => {
  let component: E503Component;
  let fixture: ComponentFixture<E503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E503Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(E503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
