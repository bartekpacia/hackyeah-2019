import { LoginFormComponent } from './login-form.component';
import { Shallow } from 'shallow-render';
import { AuthModule } from '../../auth.module';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@app/modules/shared/services/http.service';

describe(LoginFormComponent.name, () => {
  let shallow: Shallow<LoginFormComponent>;

  beforeEach(() => {
    shallow = new Shallow(LoginFormComponent, AuthModule)
      .replaceModule(RouterModule, RouterTestingModule)
      .provide(HttpService)
      .dontMock(AuthService);
  });

  it('Uses the color from the RedService', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
