import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestKoaComponent } from './rest-koa.component';

describe('RestKoaComponent', () => {
  let component: RestKoaComponent;
  let fixture: ComponentFixture<RestKoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestKoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestKoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
