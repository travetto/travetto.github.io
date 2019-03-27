import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSessionComponent } from './rest-session.component';

describe('RestSessionComponent', () => {
  let component: RestSessionComponent;
  let fixture: ComponentFixture<RestSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
