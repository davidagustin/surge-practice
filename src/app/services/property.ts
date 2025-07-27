import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties: Property[] = [
    {
      id: 1,
      title: 'Modern Luxury Villa with Ocean View',
      description: 'Stunning 4-bedroom villa with panoramic ocean views, modern amenities, and private pool. Perfect for families seeking luxury living.',
      price: 1250000,
      location: 'Malibu, CA',
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3200,
      propertyType: 'house',
      status: 'for-sale',
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
      ],
      features: ['Ocean View', 'Private Pool', 'Gourmet Kitchen', 'Smart Home', 'Wine Cellar', 'Home Theater'],
      yearBuilt: 2020,
      lotSize: 0.5,
      parking: 3,
      agent: {
        name: 'Sarah Johnson',
        phone: '+1 (310) 555-0123',
        email: 'sarah.johnson@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200'
      },
      coordinates: { lat: 34.0259, lng: -118.7798 },
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-07-27')
    },
    {
      id: 2,
      title: 'Downtown Luxury Apartment',
      description: 'Sophisticated 2-bedroom apartment in the heart of downtown with city views and premium amenities.',
      price: 850000,
      location: 'Downtown LA, CA',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1400,
      propertyType: 'apartment',
      status: 'for-sale',
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'
      ],
      features: ['City View', 'Concierge', 'Fitness Center', 'Rooftop Pool', 'Underground Parking'],
      yearBuilt: 2019,
      parking: 1,
      agent: {
        name: 'Michael Chen',
        phone: '+1 (213) 555-0456',
        email: 'michael.chen@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
      },
      coordinates: { lat: 34.0522, lng: -118.2437 },
      createdAt: new Date('2024-02-10'),
      updatedAt: new Date('2024-07-27')
    },
    {
      id: 3,
      title: 'Family Home in Quiet Neighborhood',
      description: 'Charming 3-bedroom family home with large backyard, perfect for growing families.',
      price: 650000,
      location: 'Pasadena, CA',
      bedrooms: 3,
      bathrooms: 2,
      squareFeet: 2100,
      propertyType: 'house',
      status: 'for-sale',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
      ],
      features: ['Large Backyard', 'Updated Kitchen', 'Hardwood Floors', 'Fireplace', 'Garage'],
      yearBuilt: 1995,
      lotSize: 0.3,
      parking: 2,
      agent: {
        name: 'Emily Rodriguez',
        phone: '+1 (626) 555-0789',
        email: 'emily.rodriguez@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200'
      },
      coordinates: { lat: 34.1478, lng: -118.1445 },
      createdAt: new Date('2024-03-05'),
      updatedAt: new Date('2024-07-27')
    },
    {
      id: 4,
      title: 'Beachfront Condo for Rent',
      description: 'Beautiful 1-bedroom condo steps from the beach with stunning ocean views.',
      price: 3500,
      location: 'Santa Monica, CA',
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 900,
      propertyType: 'condo',
      status: 'for-rent',
      images: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800'
      ],
      features: ['Beach Access', 'Ocean View', 'Balcony', 'Pool', 'Gym'],
      yearBuilt: 2018,
      parking: 1,
      agent: {
        name: 'David Kim',
        phone: '+1 (310) 555-0321',
        email: 'david.kim@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'
      },
      coordinates: { lat: 34.0195, lng: -118.4912 },
      createdAt: new Date('2024-04-12'),
      updatedAt: new Date('2024-07-27')
    },
    {
      id: 5,
      title: 'Luxury Penthouse Suite',
      description: 'Exclusive penthouse with 360-degree city views, private terrace, and luxury finishes.',
      price: 2800000,
      location: 'Beverly Hills, CA',
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 2800,
      propertyType: 'apartment',
      status: 'for-sale',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'
      ],
      features: ['360° City Views', 'Private Terrace', 'Chef\'s Kitchen', 'Wine Room', 'Home Office', 'Smart Home'],
      yearBuilt: 2021,
      parking: 2,
      agent: {
        name: 'Jennifer Smith',
        phone: '+1 (310) 555-0654',
        email: 'jennifer.smith@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200'
      },
      coordinates: { lat: 34.0736, lng: -118.4004 },
      createdAt: new Date('2024-05-20'),
      updatedAt: new Date('2024-07-27')
    },
    {
      id: 6,
      title: 'Investment Property - Multi-Unit',
      description: 'Excellent investment opportunity with 4 units, strong rental income potential.',
      price: 950000,
      location: 'Culver City, CA',
      bedrooms: 8,
      bathrooms: 4,
      squareFeet: 3200,
      propertyType: 'house',
      status: 'for-sale',
      images: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
      ],
      features: ['4 Units', 'High Rental Yield', 'Separate Utilities', 'Parking for Each Unit', 'Low Maintenance'],
      yearBuilt: 1985,
      lotSize: 0.4,
      parking: 4,
      agent: {
        name: 'Robert Wilson',
        phone: '+1 (310) 555-0987',
        email: 'robert.wilson@luxuryrealty.com',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
      },
      coordinates: { lat: 34.0211, lng: -118.3965 },
      createdAt: new Date('2024-06-08'),
      updatedAt: new Date('2024-07-27')
    }
  ];

  constructor() { }

  getAllProperties(): Observable<Property[]> {
    return of(this.properties);
  }

  getPropertyById(id: number): Observable<Property | undefined> {
    const property = this.properties.find(p => p.id === id);
    return of(property);
  }

  getPropertiesByType(type: string): Observable<Property[]> {
    const filtered = this.properties.filter(p => p.propertyType === type);
    return of(filtered);
  }

  getPropertiesByStatus(status: string): Observable<Property[]> {
    const filtered = this.properties.filter(p => p.status === status);
    return of(filtered);
  }

  searchProperties(query: string): Observable<Property[]> {
    const filtered = this.properties.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }

  getPropertiesByPriceRange(min: number, max: number): Observable<Property[]> {
    const filtered = this.properties.filter(p => p.price >= min && p.price <= max);
    return of(filtered);
  }
} 