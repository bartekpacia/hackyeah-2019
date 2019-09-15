import { AnswerService } from '@app/modules/games/modules/quiz/services/answer.service';

import { AnswerSelectorComponent } from './answer-selector.component';
import { QuizModule } from '../../quiz.module';
import { Shallow } from 'shallow-render';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from '@app/modules/shared/services/http.service';
import { LanguageService } from '@app/modules/shared/services/language.service';
import { BehaviorSubject } from 'rxjs';
import { DEFAULT_LANGUAGE } from '@app/config/global';


describe(AnswerSelectorComponent.name, () => {
  let shallow: Shallow<AnswerSelectorComponent>;

  beforeEach(() => {
    shallow = new Shallow(AnswerSelectorComponent, QuizModule)
      // .replaceModule(RouterModule, RouterTestingModule)
      // .provide(Router)
      .provide(AnswerService)
      .dontMock(AnswerService)
      .provide(HttpService)
      .provide(LanguageService)
      .mock(LanguageService, { lang$: new BehaviorSubject(DEFAULT_LANGUAGE) })
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
