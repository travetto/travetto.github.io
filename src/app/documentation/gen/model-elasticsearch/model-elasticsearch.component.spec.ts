import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelElasticsearchComponent } from './model-elasticsearch.component';

describe('ModelElasticsearchComponent', () => {
  let component: ModelElasticsearchComponent;
  let fixture: ComponentFixture<ModelElasticsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelElasticsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelElasticsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
