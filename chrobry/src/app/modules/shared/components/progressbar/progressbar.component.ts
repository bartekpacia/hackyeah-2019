import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressbarComponent {
  @Input() size = 6;
  @Input() progress: number;
  @Input() info: string;
}
