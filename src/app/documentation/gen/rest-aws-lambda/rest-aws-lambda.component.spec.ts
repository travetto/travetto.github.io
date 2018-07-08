import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestAwsLambdaComponent } from './rest-aws-lambda.component';

describe('RestAwsLambdaComponent', () => {
  let component: RestAwsLambdaComponent;
  let fixture: ComponentFixture<RestAwsLambdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestAwsLambdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestAwsLambdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
