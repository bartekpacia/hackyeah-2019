import { TimerService } from '@app/modules/games/modules/quiz/services/timer.service';

import { TimerComponent } from './timer.component';
import { Shallow } from 'shallow-render';
import { QuizModule } from '../../quiz.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(TimerComponent.name, () => {
  let shallow: Shallow<TimerComponent>;

  beforeEach(() => {
    shallow = new Shallow(TimerComponent, QuizModule)
      .dontMock(TimerService)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);

  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
