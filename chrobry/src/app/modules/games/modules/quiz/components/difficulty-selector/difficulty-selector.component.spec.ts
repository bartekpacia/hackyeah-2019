import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';
import { LanguageService } from '@app/modules/shared/services/language.service';

import { DifficultySelectorComponent } from './difficulty-selector.component';

describe('CategorySelectorComponent', () => {
  let component: DifficultySelectorComponent;
  let fixture: ComponentFixture<DifficultySelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ DifficultySelectorComponent ],
      providers: [ CategoryService, LanguageService ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
