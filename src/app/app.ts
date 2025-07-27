import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HomeComponent } from './components/home/home';
import { PropertiesComponent } from './components/properties/properties';
import { PropertyDetailComponent } from './components/property-detail/property-detail';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Luxury Realty';
} 