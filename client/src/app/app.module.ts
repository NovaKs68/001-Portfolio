import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { BiographyMenuComponent } from './biography-menu/biography-menu.component';
import { ShowcaseProjectMenuComponent } from './showcase-project-menu/showcase-project-menu.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import {RouterModule, Routes} from '@angular/router'

const appRoutes: Routes = [
  { path: 'menu', component: MenuViewComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    BiographyMenuComponent,
    ShowcaseProjectMenuComponent,
    MenuViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
