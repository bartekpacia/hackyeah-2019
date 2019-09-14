import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(300, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ],
})
export class ProgressComponent {

  progressArray = [
    {
      title: 'short description',
      icon: 'meh-rolling-eyes',
      status: 'done',
    },
    {
      title: 'short description',
      icon: 'meh-rolling-eyes',
      status: 'active'
    },
    {
      title: 'short description',
      icon: 'meh-rolling-eyes',
      status: 'inactive'
    },
    {
      title: 'short description',
      icon: 'smile-beam',
      status: 'inactive'
    },
    {
      title: 'short description',
      icon: 'smile-beam',
      status: 'inactive'
    },
    {
      title: 'short description',
      icon: 'laugh',
      status: 'inactive'
    },
    {
      title: 'short description',
      icon: 'grin-hearts',
      status: 'inactive'
    },
    {
      title: 'short description',
      icon: 'grin-hearts',
      status: 'inactive'
    }
  ];

}
