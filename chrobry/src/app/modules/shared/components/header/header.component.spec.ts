
import { MenuService } from '@app/modules/shared/services/menu.service';

import { HeaderComponent } from './header.component';
import { SharedModule } from '../../shared.module';
import { Shallow } from 'shallow-render';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe(HeaderComponent.name, () => {
  let shallow: Shallow<HeaderComponent>;

  beforeEach(() => {
    shallow = new Shallow(HeaderComponent, SharedModule)
      .replaceModule(RouterModule, RouterTestingModule)
      .provide(Router)
      .provide(MenuService)
      .dontMock(MenuService);
    // .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
