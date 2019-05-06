import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInDeleteComponent } from './pop-in-delete.component';

describe('PopInDeleteComponent', () => {
  let component: PopInDeleteComponent;
  let fixture: ComponentFixture<PopInDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
