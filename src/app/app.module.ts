import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { ClienteSmallFormComponent } from './cliente-small-form/cliente-small-form.component';
import { PacienteSearchBoxComponent } from './paciente-search-box/paciente-search-box.component';
import { PacienteSearchBoxService } from './paciente-search-box/paciente-search-box.service';

@NgModule({
  declarations: [
    AppComponent,
    PacienteFormComponent,
    ClienteSmallFormComponent,
    PacienteSearchBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PacienteSearchBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }