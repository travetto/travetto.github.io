import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPassportComponent } from './auth-passport.component';

describe('AuthPassportComponent', () => {
  let component: AuthPassportComponent;
  let fixture: ComponentFixture<AuthPassportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPassportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
