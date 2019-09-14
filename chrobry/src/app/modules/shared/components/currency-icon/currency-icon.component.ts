import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-icon',
  templateUrl: './currency-icon.component.html',
  styleUrls: ['./currency-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyIconComponent {
  @Input() size = 30;
}
