import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { fadeInOut } from '@app/animations/fade-in-out.animation';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class BackdropComponent {
  @Input() backgroundImage: string;
}
