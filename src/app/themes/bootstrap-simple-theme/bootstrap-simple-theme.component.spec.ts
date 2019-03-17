import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSimpleThemeComponent } from './bootstrap-simple-theme.component';

describe('BootstrapSimpleThemeComponent', () => {
  let component: BootstrapSimpleThemeComponent;
  let fixture: ComponentFixture<BootstrapSimpleThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSimpleThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSimpleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
