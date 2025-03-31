import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurtainComponent } from './curtain/curtain.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'services/eyebrows', component: HomeComponent }, // Change to actual component
  { path: 'services/makeup', component: HomeComponent },   // Change to actual component
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
