import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnswerService } from '@app/modules/quiz/services/answer.service';
import { CounterService } from '@app/modules/quiz/services/counter.service';
import { TimerService } from '@app/modules/quiz/services/timer.service';

import { QuestionService } from './question.service';
import { HttpService } from '@app/modules/shared/services/http.service';

describe('QuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [CounterService, AnswerService, TimerService, QuestionService, HttpService],
  }));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
});
