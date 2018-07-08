import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetRestComponent } from './asset-rest.component';

describe('AssetRestComponent', () => {
  let component: AssetRestComponent;
  let fixture: ComponentFixture<AssetRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
