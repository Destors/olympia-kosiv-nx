import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NAVIGATION_PATHS,
  PATHS,
} from '@olympia-kosiv-nx/core/navigation/common';
import { LayoutComponent } from '@olympia-kosiv-nx/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        loadChildren: () =>
          import('@olympia-kosiv-nx/landing/home-page').then(
            (m) => m.LandingHomePageModule
          ),
      },
      {
        path: NAVIGATION_PATHS.price,
        loadChildren: () =>
          import('@olympia-kosiv-nx/landing/price-page/ui/page').then(
            (m) => m.LandingPricePageUiPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
  ],
})
export class AppRoutingModule {}
