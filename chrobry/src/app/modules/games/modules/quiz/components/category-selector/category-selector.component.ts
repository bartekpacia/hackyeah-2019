import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { fadeInOut } from '@app/animations/fade-in-out.animation';

import { DEFAULT_LANGUAGE, Language, NUMBERING } from '@app/config/global';
import { ICategory } from '@app/interfaces/category.interface';
import { CategoryService } from '@app/modules/games/modules/quiz/services/category.service';

import { DestroyableComponent } from '@app/modules/shared/components/abstracts/destroyable/destroyable.component';
import { LanguageService } from '@app/modules/shared/services/language.service';

import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class CategorySelectorComponent extends DestroyableComponent implements OnInit, OnChanges {
  @Input() categories: Array<ICategory>;
  loaded: boolean;
  disableButtons: boolean;
  selectedCategoryId: string;
  numbering: string = NUMBERING;
  selectedLanguage$: Observable<Language>;
  defaultLanguage: Language = DEFAULT_LANGUAGE;

  constructor(
    private languageService: LanguageService,
    private categoryService: CategoryService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.categories && changes.categories.currentValue) {
      setTimeout(() => {
        this.loaded = true;
        this.changeDetectorRef.detectChanges();
      });
    }
  }

  ngOnInit(): void {
    this.disableButtons = false;
    this.selectedLanguage$ = this.languageService.lang$
      .asObservable()
      .pipe(takeUntil(this.componentDestroyed$));
  }

  selectCategory(category: ICategory): void {
    this.selectedCategoryId = category.id;
    this.disableButtons = true;
    this.categoryService.setCategory(category);
    this.changeDetectorRef.detectChanges();
  }
}
