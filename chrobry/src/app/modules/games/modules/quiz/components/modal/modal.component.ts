import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { fadeInOut } from '@app/animations/fade-in-out.animation';
import { IModal } from '@app/interfaces/modal.interface';
import { ModalService } from '@app/modules/games/modules/quiz/services/modal.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class ModalComponent extends DestroyableComponent implements OnInit {
  modal$: Observable<IModal>;

  constructor(private modalService: ModalService) {
    super();
  }

  ngOnInit(): void {
    this.modal$ = this.modalService.modal$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }

  closeModal(close: boolean): void {
    if (close) {
      this.modalService.close();
    }
  }
}
