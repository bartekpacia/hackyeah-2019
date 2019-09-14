import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoutingQrCodePages } from '@app/config/routing';
import { InputType } from '@app/modules/form/components/input/input.enum';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent {

  InputType: typeof InputType = InputType;
  RoutingQrCodePages: typeof RoutingQrCodePages = RoutingQrCodePages;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      tripNo: [undefined],
    });
  }

  navigate(path: string): void {
    this.router.navigate([path], { relativeTo: this.route });
  }

  // tslint:disable-next-line: no-empty
  submit(): void { }

}
