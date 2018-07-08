import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestExpressComponent } from './rest-express.component';

describe('RestExpressComponent', () => {
  let component: RestExpressComponent;
  let fixture: ComponentFixture<RestExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
