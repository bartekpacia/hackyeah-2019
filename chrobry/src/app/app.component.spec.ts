import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { Shallow } from 'shallow-render';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(AppComponent.name, () => {
  let shallow: Shallow<AppComponent>;

  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);

  });

  it('should create', async () => {
    const { instance } = await shallow.render({});

    expect(instance).toBeTruthy();
  });
});
