
import { LoginComponent } from './login.component';
import { AuthModule } from '../../auth.module';
import { Shallow } from 'shallow-render';

describe(LoginComponent.name, () => {
  let shallow: Shallow<LoginComponent>;

  beforeEach(() => {
    shallow = new Shallow(LoginComponent, AuthModule);
    // .replaceModule(RouterModule, RouterTestingModule)
    // .provide(Router)
    // .replaceModule(HttpClient, HttpClientTestingModule)
    // .provide(HttpService)
    // .provide(AuthService)
    // .dontMock(AuthService);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
