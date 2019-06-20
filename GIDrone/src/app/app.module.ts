import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PakketlijstComponent } from './pakketlijst/pakketlijst.component';
import { InputformComponent } from './inputform/inputform.component';
import { MapviewComponent } from './mapview/mapview.component';
import { CommonModule } from '@angular/common';
import { HoofdmenuComponent } from './hoofdmenu/hoofdmenu.component';
import { APIKEY } from './APIKEY';

@NgModule({
  declarations: [
    AppComponent,
    PakketlijstComponent,
    InputformComponent,
    MapviewComponent,
    HoofdmenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey : 'AIzaSyCbbuSE2ldNYOruJkNG3GYEiDuPnmnQAFg'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
