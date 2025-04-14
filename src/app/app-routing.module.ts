import { ContactComponent } from './contact/contact.component';
import { ResidentialComponent } from './residential/residential.component';
import { CommercialComponent } from './commercial/commercial.component';
import { MepComponent } from './mep/mep.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { CivilServicesComponent } from './civil-services/civil-services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurtainComponent } from './curtain/curtain.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },

  {
    path: 'services',
    children: [
      { path: 'civil', component: CivilServicesComponent },
      { path: 'architecture', component: ArchitectureComponent },
      { path: 'mep', component: MepComponent },
    ]
  },

  {
    path: 'portfolio',
    children: [
      { path: 'commercial', component: CommercialComponent },
      { path: 'residential', component: ResidentialComponent },
    ]
  },

  // Optional wildcard redirect
  // { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
