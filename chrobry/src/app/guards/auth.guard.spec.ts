import { TestBed, async } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('Logged in guard should', () => {
  let loggedInGuard: AuthGuard;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: router }]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    loggedInGuard = TestBed.get(AuthGuard);
  });

  it('be able to hit route when user is logged in', () => {
    sessionStorage.setItem('user', 'test');
    expect(loggedInGuard.canActivate()).toBe(true);
  });

  it('not be able to hit route when user is not logged in', () => {
    sessionStorage.setItem('', '');
    expect(loggedInGuard.canActivate()).toBe(false);
  });
});
