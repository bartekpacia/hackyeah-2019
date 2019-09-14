import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CounterService } from '@app/modules/games/modules/quiz/services/counter.service';
import { ModalService } from '@app/modules/games/modules/quiz/services/modal.service';
import { QuestionService } from '@app/modules/games/modules/quiz/services/question.service';

import { AnswerInfoComponent } from './answer-info.component';

describe('AnswerInfoComponent', () => {
  let component: AnswerInfoComponent;
  let fixture: ComponentFixture<AnswerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ AnswerInfoComponent ],
      providers: [ ModalService, QuestionService, CounterService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
