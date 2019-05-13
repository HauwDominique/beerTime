import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopInConnexionComponent } from './pop-in-connexion.component';

describe('PopInConnexionComponent', () => {
  let component: PopInConnexionComponent;
  let fixture: ComponentFixture<PopInConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopInConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopInConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
