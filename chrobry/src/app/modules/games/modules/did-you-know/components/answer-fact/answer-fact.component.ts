import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { IFact } from '@app/interfaces/fact.interface';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-answer-fact',
  templateUrl: './answer-fact.component.html',
  styleUrls: ['./answer-fact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerFactComponent implements OnChanges {
  safeImageUrl: SafeUrl;
  @Input() question: IFact;
  @Output() readonly nextFact: EventEmitter<void> = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.question && changes.question.currentValue) {
      this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(changes.question.currentValue.fact.imageUrl);
    }
  }

  next(): void {
    this.nextFact.emit();
  }
}
