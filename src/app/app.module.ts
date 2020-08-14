import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptbasicsComponent } from './typescriptbasics/typescriptbasics.component';

//Modules
import { PassangerDashboardModule } from './angular/passanger-dashboard/passanger-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptbasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // custom modules
    PassangerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
