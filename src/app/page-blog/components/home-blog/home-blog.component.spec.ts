import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeBlogComponent } from './home-blog.component';

describe('HomeBlogComponent', () => {
  let component: HomeBlogComponent;
  let fixture: ComponentFixture<HomeBlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
