import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BiographyMenuComponent } from './biography-menu/biography-menu.component';
import { ShowcaseProjectMenuComponent } from './showcase-project-menu/showcase-project-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    BiographyMenuComponent,
    ShowcaseProjectMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
