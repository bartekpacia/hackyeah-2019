import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICategory } from '@app/interfaces/category.interface';
import { QuestionService } from '@app/modules/quiz/services/question.service';
import { CustomHttpParams, HttpService } from '@app/modules/shared/services/http.service';

import { Observable, Subject } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  category$: Subject<ICategory> = new Subject<ICategory>();

  constructor(private http: HttpService, private questionService: QuestionService) { }

  fetchCategories(): Observable<Array<ICategory>> {
    const headers: HttpHeaders = new HttpHeaders().set(CustomHttpParams.LoaderMessage, 'Loading categories');

    return this.http
      .get('categories', { headers })
      .pipe(first());
  }

  setCategory(category: ICategory): void {
    this.category$.next(category);
    this.questionService.reset(category.questions);
  }
}
