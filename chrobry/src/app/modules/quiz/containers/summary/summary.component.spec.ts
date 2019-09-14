import { SummaryComponent } from './summary.component';
import { QuizModule } from '../../quiz.module';
import { Shallow } from 'shallow-render';
import { ScoreService } from '../../services/score.service';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(SummaryComponent.name, () => {
  let shallow: Shallow<SummaryComponent>;

  beforeEach(() => {
    shallow = new Shallow(SummaryComponent, QuizModule)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule)
      .replaceModule(RouterModule, RouterTestingModule)
      .provide(Router)
      .provide(ScoreService)
      .dontMock(ScoreService);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
