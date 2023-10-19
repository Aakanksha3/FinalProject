import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    SliderComponent,
    NavbarComponent,
    GalleryComponent,
    RegistrationComponent,
    ContactComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    routes,
    ReactiveFormsModule,
    RouterModule.forRoot([{path: 'registration', component: RegistrationComponent},]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
