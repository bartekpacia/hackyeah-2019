import { Component } from '@angular/core';
import { slideInAnimation } from '@app/animations/router.animation';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [slideInAnimation]
})
export class MainLayoutComponent {

}
