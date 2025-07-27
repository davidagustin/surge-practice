import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  featuredProperties: Property[] = [];
  searchLocation: string = '';
  searchType: string = '';
  searchStatus: string = '';

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFeaturedProperties();
  }

  loadFeaturedProperties(): void {
    this.propertyService.getAllProperties().subscribe(properties => {
      // Get first 3 properties as featured
      this.featuredProperties = properties.slice(0, 3);
    });
  }

  searchProperties(): void {
    // Navigate to properties page with search parameters
    const queryParams: any = {};
    
    if (this.searchLocation) {
      queryParams.location = this.searchLocation;
    }
    if (this.searchType) {
      queryParams.type = this.searchType;
    }
    if (this.searchStatus) {
      queryParams.status = this.searchStatus;
    }

    this.router.navigate(['/properties'], { queryParams });
  }

  viewProperty(propertyId: number): void {
    this.router.navigate(['/property', propertyId]);
  }
} 