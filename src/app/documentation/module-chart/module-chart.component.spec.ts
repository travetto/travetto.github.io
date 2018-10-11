import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleChartComponent } from './module-chart.component';

describe('ModuleChartComponent', () => {
  let component: ModuleChartComponent;
  let fixture: ComponentFixture<ModuleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
