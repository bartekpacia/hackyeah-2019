import { Injectable } from '@angular/core';

import { DEFAULT_LANGUAGE, Language } from '@app/config/global';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LanguageService {
  lang$: BehaviorSubject<Language> = new BehaviorSubject<Language>(DEFAULT_LANGUAGE);

  use(localeId: Language): void {
    this.lang$.next(localeId);
  }
}
