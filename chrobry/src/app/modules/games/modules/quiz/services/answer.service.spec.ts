import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';

import { AnswerService } from './answer.service';
import { HttpService } from '@app/modules/shared/services/http.service';

describe('AnswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      AnswerService,
      HttpService,
    ],
  }));

  it('should be created', inject([AnswerService], (guard: HttpService) => {
    expect(guard).toBeTruthy();
  }));
});
