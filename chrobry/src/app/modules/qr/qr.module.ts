import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrComponent } from './components/qr/qr.component';
import { AddTicketComponent } from './containers/add-ticket/add-ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormModule } from '../form/form.module';
import { QrReaderComponent } from './containers/qr-reader/qr-reader.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    AddTicketComponent,
    QrComponent,
    QrReaderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormModule,
    QrRoutingModule,
    ZXingScannerModule,
  ]
})
export class QrModule { }
