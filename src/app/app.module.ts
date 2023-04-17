import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';
import { PrivateHeaderComponent } from './layouts/private-header/private-header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PublicMenuComponent } from './layouts/public-menu/public-menu.component';
import { PrivateMenuComponent } from './layouts/private-menu/private-menu.component';
import { HomeComponent } from './scenes/home/home.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { AboutComponent } from './scenes/about/about.component';
import { GalleryComponent } from './scenes/gallery/gallery.component';
import { DashboardComponent } from './scenes/dashboard/dashboard.component';
import { ProfileComponent } from './scenes/profile/profile.component';
import { CRUDComponent } from './scenes/crud/crud.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    LoginPageComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    ProfileComponent,
    CRUDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
