import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprodutcsComponent } from './showprodutcs.component';

describe('ShowprodutcsComponent', () => {
  let component: ShowprodutcsComponent;
  let fixture: ComponentFixture<ShowprodutcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprodutcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprodutcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
