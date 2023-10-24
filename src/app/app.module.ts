import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
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
    HttpClientModule,
    RouterModule.forRoot([{ path: 'registration', component: RegistrationComponent },], {
    initialNavigation: 'enabledBlocking'
}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
