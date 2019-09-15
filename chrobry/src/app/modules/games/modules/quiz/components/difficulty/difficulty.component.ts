import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifficultyComponent {
  difficulties: Array<{ label: string; icon: IconProp; }> = [
    { label: 'For kids', icon: 'child' },
  ];
}
