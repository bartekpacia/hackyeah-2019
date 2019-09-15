import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { Subject } from 'rxjs';
import { HttpService } from '@app/modules/shared/services/http.service';
import { takeUntil } from 'rxjs/operators';
import { IFact } from '@app/interfaces/fact.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent extends DestroyableComponent implements OnInit {
  question$: Subject<IFact> = new Subject<IFact>();

  constructor(private http: HttpService) {
    super();
  }

  private getNewQuestion(): void {
    this.http.get('did-you-know')
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((question) => {
        this.question$.next(question);
      });
  }

  ngOnInit(): void {
    this.getNewQuestion();
  }
}
