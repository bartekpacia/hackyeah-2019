import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut: AnimationTriggerMetadata =
  trigger('fadeInOut', [
    state('in', style({
      opacity: 1,
    })),
    state('out', style({
      opacity: 0,
    })),
    transition('in => out', [
      animate('0.5s')
    ]),
    transition('out => in', [
      animate('0.5s')
    ]),
  ]);
