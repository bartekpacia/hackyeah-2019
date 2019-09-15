import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IQuestion } from '@app/interfaces/question.interface';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { DB } from '@app/app.module';
import { Subject } from 'rxjs';
import { TimerService } from '@app/modules/games/modules/quiz/services/timer.service';
import { CounterService } from '@app/modules/games/modules/quiz/services/counter.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent extends DestroyableComponent implements OnInit {
  @Input() difficulty: number;
  question$: Subject<IQuestion> = new Subject<IQuestion>();

  constructor(private timerService: TimerService, private counterService: CounterService) {
    super();
  }

  private subscribeToDb(): void {
    this.counterService.reset();
    DB.collection('current-question')
      .onSnapshot((data) => {
        data.forEach((item) => {
          // console.log('Current data: ', item.data());
          this.question$.next(item.data() as IQuestion);
          this.timerService.reset();
          this.counterService.update();
        });
      });
  }

  ngOnInit(): void {
    this.subscribeToDb();
  }
}
