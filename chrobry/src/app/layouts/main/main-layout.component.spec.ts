import { MainLayoutComponent } from './main-layout.component';
import { AppModule } from '@app/app.module';
import { Shallow } from 'shallow-render';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(MainLayoutComponent.name, () => {
  let shallow: Shallow<MainLayoutComponent>;

  beforeEach(() => {
    shallow = new Shallow(MainLayoutComponent, AppModule)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
