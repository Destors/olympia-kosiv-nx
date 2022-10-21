import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'libs/ui/layout/src/lib/layout/layout.component';
import { NAVIGATION_PATHS } from 'libs/core/navigation/common/src/lib/navigation.interface';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [{
    path: NAVIGATION_PATHS.home
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
