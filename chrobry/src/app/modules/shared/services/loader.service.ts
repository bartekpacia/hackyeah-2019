import { Injectable } from '@angular/core';

import { ICounter } from '@app/interfaces/counter.interface';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private requests = 0;
  private maxRequestCount = 0;
  private messages: Array<string> = [];

  requests$: BehaviorSubject<ICounter> = new BehaviorSubject<ICounter>({ count: 0, maxCount: 0, messages: [] });
  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private updateRequests(): void {
    this.requests$.next({
      count: this.requests,
      maxCount: this.maxRequestCount,
      messages: this.messages
    });
  }

  show(message?: string): void {
    this.requests++;

    if (message) {
      this.messages.unshift(message);
    } else {
      this.messages.unshift('Work in progress');
    }

    if (this.requests > this.maxRequestCount) {
      this.maxRequestCount = this.requests;
    }
    this.updateRequests();
    this.loading$.next(true);
  }

  hide(message?: string): void {
    this.requests--;

    if (this.requests <= this.messages.length) {
      const index: number = message ? this.messages.indexOf(message) : this.messages.length - 1;
      this.messages.splice(index, 1);
    }
    this.updateRequests();

    if (!this.requests) {
      this.maxRequestCount = 0;
      this.updateRequests();
      this.loading$.next(false);
    }
  }
}
