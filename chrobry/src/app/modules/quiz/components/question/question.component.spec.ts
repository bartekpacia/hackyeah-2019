import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerSelectorComponent } from '@app/modules/quiz/components/answer-selector/answer-selector.component';
import { CounterComponent } from '@app/modules/quiz/components/counter/counter.component';
import { TimerComponent } from '@app/modules/quiz/components/timer/timer.component';
import { QuestionService } from '@app/modules/quiz/services/question.service';
import { TimerService } from '@app/modules/quiz/services/timer.service';
import { LanguageService } from '@app/modules/shared/services/language.service';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ QuestionComponent, TimerComponent, AnswerSelectorComponent, CounterComponent ],
      providers: [ QuestionService, TimerService, LanguageService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
