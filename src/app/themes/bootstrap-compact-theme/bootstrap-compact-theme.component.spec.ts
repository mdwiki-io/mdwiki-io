import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCompactThemeComponent } from './bootstrap-compact-theme.component';

describe('BootstrapCompactThemeComponent', () => {
  let component: BootstrapCompactThemeComponent;
  let fixture: ComponentFixture<BootstrapCompactThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCompactThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCompactThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
