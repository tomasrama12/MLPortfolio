import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { PvOneComponent } from './projects-views/pv-one/pv-one.component';
import { PvHeartComponent } from './projects-views/pv-heart/pv-heart.component';
import { PvTitanicComponent } from './projects-views/pv-titanic/pv-titanic.component';
import { PvShelterComponent } from './projects-views/pv-shelter/pv-shelter.component';

const routes: Routes = [
  {path:'', redirectTo:'/landing-page', pathMatch: "full"},
  {path:'landing-page', component: LandingPageComponent},
  {path:'other-info', component: InfoPageComponent},
  {path:'project-one', component: PvOneComponent},
  {path: 'project-two', component: PvHeartComponent},
  {path: 'project-three', component: PvTitanicComponent},
  {path: 'project-four', component: PvShelterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled', scrollOffset: [0, 64]})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
