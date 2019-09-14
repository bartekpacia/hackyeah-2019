import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardButtonComponent {
  @Input() pathTo: string;

  constructor(private router: Router) { }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
