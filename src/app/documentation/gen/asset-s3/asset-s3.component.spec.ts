import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetS3Component } from './asset-s3.component';

describe('AssetS3Component', () => {
  let component: AssetS3Component;
  let fixture: ComponentFixture<AssetS3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetS3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
