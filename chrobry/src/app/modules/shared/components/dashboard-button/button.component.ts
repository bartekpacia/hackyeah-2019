import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardButtonComponent {
  @Input() pathTo: string;
  @Input() relative: boolean;

  constructor(private router: Router, private route: ActivatedRoute) { }

  navigateTo(path: string): void {
    this.router.navigate([path], { relativeTo: this.relative ? this.route : undefined});
  }
}
