import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhumbergerComponent } from './menuhumberger.component';

describe('MenuhumbergerComponent', () => {
  let component: MenuhumbergerComponent;
  let fixture: ComponentFixture<MenuhumbergerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuhumbergerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuhumbergerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
