import { animate, AnimationTriggerMetadata, query, stagger, style, transition, trigger } from '@angular/animations';

export const listAnimation: AnimationTriggerMetadata =
  trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':enter', [
        style({ opacity: 0 }),
        stagger(300, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ], { optional: true })
    ])
  ]);
