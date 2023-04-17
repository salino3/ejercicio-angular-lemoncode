import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './scenes/home/home.component';
import { LoginPageComponent } from './scenes/login-page/login-page.component';
import { AboutComponent } from './scenes/about/about.component';
import { DashboardComponent } from './scenes/dashboard/dashboard.component';
import { GalleryComponent } from './scenes/gallery/gallery.component';
import { ProfileComponent } from './scenes/profile/profile.component';
import { CRUDComponent } from './scenes/crud/crud.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'crud', component: CRUDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
