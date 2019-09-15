import { CounterComponent } from './counter.component';
import { QuizModule } from '../../quiz.module';
import { Shallow } from 'shallow-render';
import { CounterService } from '../../services/counter.service';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(CounterComponent.name, () => {
  let shallow: Shallow<CounterComponent>;

  beforeEach(() => {
    shallow = new Shallow(CounterComponent, QuizModule)
      .dontMock(CounterService)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
