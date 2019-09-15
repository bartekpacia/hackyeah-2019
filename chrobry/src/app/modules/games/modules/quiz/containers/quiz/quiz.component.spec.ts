import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnswerSelectorComponent } from '@app/modules/games/modules/quiz/components/answer-selector/answer-selector.component';
import { DifficultySelectorComponent } from '@app/modules/games/modules/quiz/components/difficulty-selector/difficulty-selector.component';
import { DifficultyComponent } from '@app/modules/games/modules/quiz/components/difficulty/difficulty.component';
import { CounterComponent } from '@app/modules/games/modules/quiz/components/counter/counter.component';
import { QuestionComponent } from '@app/modules/games/modules/quiz/components/question/question.component';
import { TimerComponent } from '@app/modules/games/modules/quiz/components/timer/timer.component';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';

import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [
        QuizComponent,
        QuestionComponent,
        TimerComponent,
        AnswerSelectorComponent,
        DifficultyComponent,
        DifficultySelectorComponent,
        CounterComponent,
      ],
      providers: [ CategoryService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
