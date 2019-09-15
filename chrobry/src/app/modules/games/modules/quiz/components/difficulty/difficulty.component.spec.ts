import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';

import { DifficultyComponent } from './difficulty.component';
import { HttpClient } from '@angular/common/http';
import { QuizModule } from '../../quiz.module';
import { Shallow } from 'shallow-render';
import { HttpService } from '@app/modules/shared/services/http.service';
import { of } from 'rxjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(DifficultyComponent.name, () => {
  let shallow: Shallow<DifficultyComponent>;

  beforeEach(() => {
    shallow = new Shallow(DifficultyComponent, QuizModule)
      .replaceModule(HttpClient, HttpClientTestingModule)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule)
      .provide(HttpService)
      .provide(CategoryService)
      .dontMock(CategoryService)
      .mock(CategoryService, { fetchCategories() { return of({}); } });
  });

  it('should create', async () => {
    const { instance } = await shallow.render({

    });

    expect(instance).toBeTruthy();
  });
});
