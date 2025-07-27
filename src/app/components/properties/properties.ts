import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.html',
  styleUrl: './properties.css'
})
export class PropertiesComponent implements OnInit {
  allProperties: Property[] = [];
  filteredProperties: Property[] = [];
  sortBy: string = 'date-desc';

  filters = {
    location: '',
    type: '',
    status: '',
    minPrice: null as number | null,
    maxPrice: null as number | null,
    bedrooms: ''
  };

  constructor(
    private propertyService: PropertyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProperties();
    this.loadQueryParams();
  }

  loadProperties(): void {
    this.propertyService.getAllProperties().subscribe(properties => {
      this.allProperties = properties;
      this.applyFilters();
    });
  }

  loadQueryParams(): void {
    this.route.queryParams.subscribe(params => {
      if (params['location']) this.filters.location = params['location'];
      if (params['type']) this.filters.type = params['type'];
      if (params['status']) this.filters.status = params['status'];
      this.applyFilters();
    });
  }

  applyFilters(): void {
    let filtered = [...this.allProperties];

    // Location filter
    if (this.filters.location) {
      filtered = filtered.filter(p => 
        p.location.toLowerCase().includes(this.filters.location.toLowerCase()) ||
        p.title.toLowerCase().includes(this.filters.location.toLowerCase())
      );
    }

    // Type filter
    if (this.filters.type) {
      filtered = filtered.filter(p => p.propertyType === this.filters.type);
    }

    // Status filter
    if (this.filters.status) {
      filtered = filtered.filter(p => p.status === this.filters.status);
    }

    // Price range filter
    if (this.filters.minPrice) {
      filtered = filtered.filter(p => p.price >= this.filters.minPrice!);
    }
    if (this.filters.maxPrice) {
      filtered = filtered.filter(p => p.price <= this.filters.maxPrice!);
    }

    // Bedrooms filter
    if (this.filters.bedrooms) {
      const minBedrooms = parseInt(this.filters.bedrooms);
      filtered = filtered.filter(p => p.bedrooms >= minBedrooms);
    }

    this.filteredProperties = filtered;
    this.sortProperties();
  }

  clearFilters(): void {
    this.filters = {
      location: '',
      type: '',
      status: '',
      minPrice: null,
      maxPrice: null,
      bedrooms: ''
    };
    this.filteredProperties = [...this.allProperties];
    this.sortProperties();
  }

  sortProperties(): void {
    switch (this.sortBy) {
      case 'price-asc':
        this.filteredProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProperties.sort((a, b) => b.price - a.price);
        break;
      case 'date-desc':
        this.filteredProperties.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'date-asc':
        this.filteredProperties.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
    }
  }

  viewProperty(propertyId: number): void {
    this.router.navigate(['/property', propertyId]);
  }
} 