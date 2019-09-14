import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from '@app/modules/auth/components/login-form/login-form.component';
import { AuthService } from '@app/modules/auth/services/auth.service';
import { FormModule } from '@app/modules/form/form.module';
import { SharedModule } from '@app/modules/shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './containers/login/login.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    SharedModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
