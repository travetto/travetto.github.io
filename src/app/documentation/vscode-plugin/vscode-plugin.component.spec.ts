import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSCodePluginComponent } from './vscode-plugin.component';

describe('VSCodePluginComponent', () => {
  let component: VSCodePluginComponent;
  let fixture: ComponentFixture<VSCodePluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VSCodePluginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSCodePluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
