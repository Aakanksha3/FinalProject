//import {RouterModule} from ‘@angular/core’;
import { RouterModule, Routes } from '@angular/router';
//module for implementing routing

import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';


//Create and export a variable called Router in the app.routing.ts, which would be a collection of all routes inside the Angular application.
// pathMatch is specifying a strict matching of path to reach the destination page.

export const router: Routes = [
    { path: '', redirectTo: "", pathMatch: 'full'}, //default page
    { path: 'about', component: AboutComponent },
    { path: 'slider', component: SliderComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'maintenance', component: MaintenanceComponent}
    
];
//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)
export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);