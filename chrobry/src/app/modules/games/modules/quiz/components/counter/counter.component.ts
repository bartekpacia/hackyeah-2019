import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterService } from '@app/modules/games/modules/quiz/services/counter.service';
import { fadeInOut } from '@app/animations/fade-in-out.animation';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class CounterComponent {

  constructor(public counterService: CounterService) { }

}
