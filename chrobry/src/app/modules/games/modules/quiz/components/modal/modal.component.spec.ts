import { ModalService } from '@app/modules/games/modules/quiz/services/modal.service';

import { ModalComponent } from './modal.component';
import { Shallow } from 'shallow-render';
import { RouterModule, Router } from '@angular/router';
import { QuizModule } from '../../quiz.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(ModalComponent.name, () => {
  let shallow: Shallow<ModalComponent>;

  beforeEach(() => {
    shallow = new Shallow(ModalComponent, QuizModule)
      .replaceModule(RouterModule, RouterTestingModule)
      .provide(Router)
      .provide(ModalService)
      .dontMock(ModalService)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
