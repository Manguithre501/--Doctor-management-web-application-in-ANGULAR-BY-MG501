import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './Partials/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Partials/navbar/navbar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NouveauComponent } from './pages/nouveau/nouveau.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifierComponent } from './pages/modifier/modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    DetailComponent,
    NouveauComponent,
    ModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
