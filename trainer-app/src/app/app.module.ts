import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { NavigatorRoutingModule } from './navigator/navigator-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NavigatorRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
