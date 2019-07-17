import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSqlComponent } from './model-sql.component';

describe('ModelSqlComponent', () => {
  let component: ModelSqlComponent;
  let fixture: ComponentFixture<ModelSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
