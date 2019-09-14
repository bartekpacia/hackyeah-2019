import { SnackbarService } from '@app/modules/shared/services/snackbar.service';

import { SnackbarComponent } from './snackbar.component';
import { SharedModule } from '../../shared.module';
import { Shallow } from 'shallow-render';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe(SnackbarComponent.name, () => {
  let shallow: Shallow<SnackbarComponent>;

  beforeEach(() => {
    shallow = new Shallow(SnackbarComponent, SharedModule)
      .provide(SnackbarService)
      .dontMock(SnackbarService)
      .replaceModule(BrowserAnimationsModule, NoopAnimationsModule);
  });

  it('should create', async () => {
    const { instance } = await shallow.render();

    expect(instance).toBeTruthy();
  });
});
