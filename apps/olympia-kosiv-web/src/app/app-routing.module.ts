import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  NAVIGATION_PATHS,
  PATHS,
} from '@olympia/core/navigation/common';
import { LayoutComponent } from '@olympia/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        loadChildren: () =>
          import('@olympia/landing/home/page').then(
            (m) => m.LandingHomePageModule
          ),
      },
      {
        path: NAVIGATION_PATHS.photo,
        loadChildren: () =>
          import('@olympia/landing/photo/page').then(
            (m) => m.LandingPhotoPageModule
          ),
      },
      {
        path: NAVIGATION_PATHS.price,
        loadChildren: () =>
          import('@olympia/landing/price/page').then(
            (m) => m.LandingPricePageModule
          ),
      },
      {
        path: NAVIGATION_PATHS.contact,
        loadChildren: () =>
          import('@olympia/landing/contact/page').then(
            (m) => m.LandingContactPageModule
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
