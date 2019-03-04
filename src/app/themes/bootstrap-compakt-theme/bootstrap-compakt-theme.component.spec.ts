import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCompaktThemeComponent } from './bootstrap-compakt-theme.component';

describe('BootstrapCompaktThemeComponent', () => {
  let component: BootstrapCompaktThemeComponent;
  let fixture: ComponentFixture<BootstrapCompaktThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCompaktThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCompaktThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
