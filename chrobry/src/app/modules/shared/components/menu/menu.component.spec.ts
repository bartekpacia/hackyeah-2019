
import { AuthService } from '@app/modules/auth/services/auth.service';

import { MenuComponent } from './menu.component';
import { SharedModule } from '../../shared.module';
import { Shallow } from 'shallow-render';
import { RouterModule, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '../../services/http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuService } from '../../services/menu.service';

describe(MenuComponent.name, () => {
  let shallow: Shallow<MenuComponent>;

  beforeEach(() => {
    shallow = new Shallow(MenuComponent, SharedModule)
      .replaceModule(RouterModule, RouterTestingModule)
      .provide(Router)
      .replaceModule(HttpClient, HttpClientTestingModule)
      .provide(HttpService)
      .provide(MenuService)
      .provide(AuthService)
      .dontMock(AuthService);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
