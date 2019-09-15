import { TestBed } from '@angular/core/testing';

import { DomService } from '@app/modules/shared/services/dom.service';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ DomService, ModalService ],
  }));

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
