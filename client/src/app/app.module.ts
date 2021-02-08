import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { BiographyMenuComponent } from './components/biography-menu/biography-menu.component';
import { ShowcaseProjectMenuComponent } from './components/showcase-project-menu/showcase-project-menu.component';
import { MenuViewComponent } from './pages/menu-view/menu-view.component';
import {RouterModule, Routes} from '@angular/router';
import { DeviseMenuComponent } from './components/devise-menu/devise-menu.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component'
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path : '', component: MenuViewComponent },
  { path: 'menu', component: MenuViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    BiographyMenuComponent,
    ShowcaseProjectMenuComponent,
    MenuViewComponent,
    DeviseMenuComponent,
    CreateProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
