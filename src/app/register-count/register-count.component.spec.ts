import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCountComponent } from './register-count.component';

describe('RegisterCountComponent', () => {
  let component: RegisterCountComponent;
  let fixture: ComponentFixture<RegisterCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
