import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { ProtectRoute } from './services/protect.route.service';
const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ProtectRoute],
  },
  {
    path: 'detail/:id',
    component: PatientDetailsComponent,
    canActivate: [ProtectRoute],
  },
  {
    path: 'registration',
    component: NewRegistrationComponent,
    canActivate: [ProtectRoute],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
