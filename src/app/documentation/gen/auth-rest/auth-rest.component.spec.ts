import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRestComponent } from './auth-rest.component';

describe('AuthRestComponent', () => {
  let component: AuthRestComponent;
  let fixture: ComponentFixture<AuthRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
