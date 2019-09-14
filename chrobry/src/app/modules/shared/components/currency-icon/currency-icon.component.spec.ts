import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyIconComponent } from './currency-icon.component';

describe('CurrencyIconComponent', () => {
  let component: CurrencyIconComponent;
  let fixture: ComponentFixture<CurrencyIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
