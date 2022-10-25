import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLayoutModule } from '@olympia-kosiv-nx/ui/layout';
import { NAVIGATION_PATHS } from 'libs/core/navigation/common/src/lib/navigation.interface';
import { LayoutComponent } from 'libs/ui/layout/src/lib/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        loadChildren: () =>
          import(
            '../../../../libs/landing/home-page/src/lib/landing-home-page.module'
          ).then((m) => m.LandingHomePageModule),
      },
      {
        path: NAVIGATION_PATHS.price,
        loadChildren: () =>
          import(
            '../../../../libs/landing/price-page/ui/page/src/lib/landing-price-page-ui-page.module'
          ).then((m) => m.LandingPricePageUiPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UiLayoutModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
