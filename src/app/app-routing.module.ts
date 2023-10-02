import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PvOneComponent } from './projects-views/pv-one/pv-one.component';

const routes: Routes = [
  {path:'', redirectTo:'/landing-page', pathMatch: "full"},
  {path:'landing-page', component: LandingPageComponent},
  {path:'other-info', component: InfoPageComponent},
  {path:'project-one', component: PvOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
