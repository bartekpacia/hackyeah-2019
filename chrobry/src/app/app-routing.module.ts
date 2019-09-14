import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingAppPages, RoutingPages } from '@app/config/routing';
import { AuthGuard } from '@app/guards/auth.guard';
import { MainLayoutComponent } from '@app/layouts/main/main-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: RoutingPages.App },
  {
    path: RoutingPages.Login,
    loadChildren: () => import(`@app/modules/auth/auth.module`)
      .then(module => module.AuthModule),
  },
  {
    path: RoutingPages.App,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    component: MainLayoutComponent,
    children: [
      { path: RoutingPages.App, pathMatch: 'full', redirectTo: RoutingAppPages.Dashboard },
      {
        path: RoutingAppPages.Dashboard,
        canLoad: [AuthGuard],
        loadChildren: () => import(`@app/modules/dashboard/dashboard.module`)
          .then(module => module.DashboardModule),
      },
      {
        path: RoutingAppPages.Quiz,
        canLoad: [AuthGuard],
        loadChildren: () => import(`@app/modules/quiz/quiz.module`)
          .then(module => module.QuizModule),
      },
      {
        path: RoutingAppPages.Qr,
        loadChildren: () => import(`@app/modules/qr/qr.module`)
          .then(module => module.QrModule),
      },
      {
        path: RoutingAppPages.Progress,
        loadChildren: () => import(`@app/modules/progress/progress.module`)
          .then(module => module.ProgressModule),
      },
      {
        path: RoutingAppPages.Shop,
        loadChildren: () => import(`@app/modules/shop/shop.module`)
          .then(module => module.ShopModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
