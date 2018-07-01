import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthExpressComponent } from './auth-express.component';

describe('AuthExpressComponent', () => {
  let component: AuthExpressComponent;
  let fixture: ComponentFixture<AuthExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
