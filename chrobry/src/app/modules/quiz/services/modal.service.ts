import { Injectable } from '@angular/core';

import { IDomChildElementConfig } from '@app/interfaces/dom.interface';
import { IModal } from '@app/interfaces/modal.interface';
import { DomService } from '@app/modules/shared/services/dom.service';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ModalService {
  private modalElementId = 'modal-content';
  modal$: BehaviorSubject<IModal> = new BehaviorSubject({ show: false, closeable: true });

  constructor(private domService: DomService) { }

  open(component: any, inputs: object, outputs: object, closeable: boolean = true) {
    const componentConfig: IDomChildElementConfig = inputs || outputs ? { inputs, outputs } : undefined;
    this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
    this.modal$.next({ show: true, closeable });
  }

  close() {
    if (this.modal$.value.show) {
      this.modal$.next({ show: false });
      this.domService.removeComponent();

      return;
    }
  }
}
