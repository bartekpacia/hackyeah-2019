import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './did-you-know.component.html',
  styleUrls: ['./did-you-know.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DidYouKnowComponent { }
