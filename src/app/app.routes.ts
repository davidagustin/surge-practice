import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { PropertiesComponent } from './components/properties/properties';
import { PropertyDetailComponent } from './components/property-detail/property-detail';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
]; 