import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEnrolledComponent } from './components/create-enrolled/create-enrolled.component';
import { ListEnrolledsComponent } from './components/list-enrolleds/list-enrolleds.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEnrolledComponent,
    ListEnrolledsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
