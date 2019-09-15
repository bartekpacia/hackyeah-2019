import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFact } from '@app/interfaces/fact.interface';

@Component({
  selector: 'app-answer-fact',
  templateUrl: './answer-fact.component.html',
  styleUrls: ['./answer-fact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerFactComponent {

  @Input() question: IFact;

  next(): void {
    // this.questionService.getNewQuestion();
  }
}
