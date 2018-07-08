import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMongoComponent } from './model-mongo.component';

describe('ModelMongoComponent', () => {
  let component: ModelMongoComponent;
  let fixture: ComponentFixture<ModelMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
