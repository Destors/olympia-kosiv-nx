import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from '@olympia-kosiv-nx/ui/carousel';
import { UiContainerModule } from '@olympia-kosiv-nx/ui/container';

import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: HomePageComponent },
    ]),
    UiContainerModule,
    CarouselModule,
  ],
  declarations: [HomePageComponent],
})
export class LandingHomePageModule {}
