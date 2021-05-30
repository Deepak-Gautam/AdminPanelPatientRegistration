import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { ProtectRoute } from './services/protect.route.service';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [ProtectRoute],
  },
  { path: 'detail/:id', component: PatientDetailsComponent },
  { path: 'registration', component: NewRegistrationComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
