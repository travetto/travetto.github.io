import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMongoComponent } from './asset-mongo.component';

describe('AssetMongoComponent', () => {
  let component: AssetMongoComponent;
  let fixture: ComponentFixture<AssetMongoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMongoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
