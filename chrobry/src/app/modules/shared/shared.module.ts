import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FooterComponent } from '@app/modules/shared/components/footer/footer.component';
import { HeaderComponent } from '@app/modules/shared/components/header/header.component';
import { LoaderComponent } from '@app/modules/shared/components/loader/loader.component';
import { MenuComponent } from '@app/modules/shared/components/menu/menu.component';
import { SnackbarComponent } from '@app/modules/shared/components/snackbar/snackbar.component';

import { DomService } from '@app/modules/shared/services/dom.service';
import { HttpService } from '@app/modules/shared/services/http.service';
import { LanguageService } from '@app/modules/shared/services/language.service';
import { LoaderService } from '@app/modules/shared/services/loader.service';
import { MenuService } from '@app/modules/shared/services/menu.service';
import { SnackbarService } from '@app/modules/shared/services/snackbar.service';
import { CurrencyIconComponent } from './components/currency-icon/currency-icon.component';
import { UserService } from '@app/modules/shared/services/user.service';
import { RouterModule } from '@angular/router';
import { BackdropComponent } from './components/backdrop/backdrop.component';

const declarations: Array<any> = [
  FooterComponent,
  HeaderComponent,
  LoaderComponent,
  MenuComponent,
  SnackbarComponent,
  CurrencyIconComponent,
  BackdropComponent,
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [...declarations],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        DomService,
        HttpService,
        LanguageService,
        LoaderService,
        MenuService,
        SnackbarService,
        UserService,
      ]
    };
  }
}
