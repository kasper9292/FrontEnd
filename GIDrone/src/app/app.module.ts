import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PakketlijstComponent } from './pakketlijst/pakketlijst.component';
import { PakketdetailsComponent } from './pakketdetails/pakketdetails.component';
import { InputformComponent } from './inputform/inputform.component';

@NgModule({
  declarations: [
    AppComponent,
    PakketlijstComponent,
    PakketdetailsComponent,
    InputformComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
