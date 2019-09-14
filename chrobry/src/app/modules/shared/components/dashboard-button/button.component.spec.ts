import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: DashboardButtonComponent;
  let fixture: ComponentFixture<DashboardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
