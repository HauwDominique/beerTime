import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInOrderComponent } from './pop-in-order.component';

describe('PopInOrderComponent', () => {
  let component: PopInOrderComponent;
  let fixture: ComponentFixture<PopInOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
