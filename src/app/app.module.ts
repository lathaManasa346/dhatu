import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurtainComponent } from './curtain/curtain.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { CivilServicesComponent } from './civil-services/civil-services.component';
import { HeaderComponent } from './header/header.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { MepComponent } from './mep/mep.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ResidentialComponent } from './residential/residential.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CurtainComponent,
    HomeComponent,
    HomeContentComponent,
    HomeDetailsComponent,
    CivilServicesComponent,
    HeaderComponent,
    ArchitectureComponent,
    MepComponent,
    CommercialComponent,
    ResidentialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
