import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpService } from '@app/modules/shared/services/http.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(AuthService.name, () => {
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      AuthService,
      HttpService,
      HttpClient,
      { provide: Router, useValue: router },
    ],
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
