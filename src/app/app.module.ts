import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
