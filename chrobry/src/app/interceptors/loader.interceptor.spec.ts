import { TestBed } from '@angular/core/testing';
import { LoaderService } from '@app/modules/shared/services/loader.service';
import { SnackbarService } from '@app/modules/shared/services/snackbar.service';

import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoaderService,
      SnackbarService,
    ]
  }));

  it('should be created', () => {
    const service: LoaderInterceptor = TestBed.get(LoaderInterceptor);
    expect(service).toBeTruthy();
  });
});
