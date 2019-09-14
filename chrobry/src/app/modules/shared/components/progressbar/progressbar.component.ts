import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressbarComponent {
  @Input() progress: number;
}
