import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.css']
})
export class QrReaderComponent {

  constructor(
    private location: Location
  ) { }

  scanSuccess(_event?: any) {
    this.location.back();
  }
}
