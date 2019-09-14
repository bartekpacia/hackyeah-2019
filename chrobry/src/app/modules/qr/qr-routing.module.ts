import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingQrCodePages } from '@app/config/routing';
import { AddTicketComponent } from './containers/add-ticket/add-ticket.component';
import { QrReaderComponent } from './containers/qr-reader/qr-reader.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path: RoutingQrCodePages.Home,
    component: AddTicketComponent,
  },
  {
    pathMatch: 'full',
    path: RoutingQrCodePages.QrRader,
    component: QrReaderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrRoutingModule { }
