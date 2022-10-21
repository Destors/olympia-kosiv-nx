import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVIGATION_PATHS } from 'libs/core/navigation/common/src/lib/navigation.interface';
import { HomePageComponent } from 'libs/landing/home-page/src/lib/home-page/home-page.component';
import { LayoutComponent } from 'libs/ui/layout/src/lib/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.home,
        component: HomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
