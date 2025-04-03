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

const routes: Routes =[
  { path: '', component: HomeComponent },
  {path:'contact', component: ContactComponent},
  { path: 'services/eyebrows', component: HomeComponent }, // Change to actual component
  { path: 'services/makeup', component: HomeComponent },
    // Change to actual component
    {path: 'services/civil', component: CivilServicesComponent},
    {path:'services/architecture', component: ArchitectureComponent},
    {path:'services/mep', component:MepComponent},
    {path:'portfolio/commercial', component: CommercialComponent},
    {path:'porfolio/residential', component: ResidentialComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
