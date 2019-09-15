import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-difficulty-selector',
  templateUrl: './difficulty-selector.component.html',
  styleUrls: ['./difficulty-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DifficultySelectorComponent extends DestroyableComponent implements OnInit {
  @Input() difficulties: Array<{ label: string; icon: IconProp; }> = [];
  disableButtons: boolean;
  selectedDifficultyId: number;

  constructor(
    private categoryService: CategoryService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit(): void {
    this.disableButtons = false;
  }

  selectDifficulty(difficulty: number): void {
    this.selectedDifficultyId = difficulty;
    this.disableButtons = true;
    this.categoryService.setDifficulty(difficulty);
    this.changeDetectorRef.detectChanges();
  }
}
