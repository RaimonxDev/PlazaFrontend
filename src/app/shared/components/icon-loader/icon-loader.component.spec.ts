import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLoaderComponent } from './icon-loader.component';

describe('IconLoaderComponent', () => {
  let component: IconLoaderComponent;
  let fixture: ComponentFixture<IconLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
