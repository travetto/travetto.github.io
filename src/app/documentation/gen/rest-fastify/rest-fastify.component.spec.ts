import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestFastifyComponent } from './rest-fastify.component';

describe('RestFastifyComponent', () => {
  let component: RestFastifyComponent;
  let fixture: ComponentFixture<RestFastifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestFastifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestFastifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
