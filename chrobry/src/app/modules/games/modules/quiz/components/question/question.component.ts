import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ICategory } from '@app/interfaces/category.interface';
import { IQuestion } from '@app/interfaces/question.interface';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { DB } from '@app/app.module';
import { Subject } from 'rxjs';
import { TimerService } from '@app/modules/games/modules/quiz/services/timer.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent extends DestroyableComponent implements OnInit {
  @Input() category: ICategory;
  question$: Subject<IQuestion> = new Subject<IQuestion>();

  constructor(private timerService: TimerService) {
    super();
  }

  private subscribeToDb(): void {
    DB.collection('current-question')
      .onSnapshot((data) => {
        data.forEach((item) => {
          // console.log('Current data: ', item.data());
          this.question$.next(item.data() as IQuestion);
          this.timerService.reset();
        });
      });
  }

  ngOnInit(): void {
    this.subscribeToDb();
  }
}
