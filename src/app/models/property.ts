export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land';
  status: 'for-sale' | 'for-rent' | 'sold' | 'rented';
  images: string[];
  features: string[];
  yearBuilt?: number;
  lotSize?: number;
  parking?: number;
  agent: {
    name: string;
    phone: string;
    email: string;
    image?: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  createdAt: Date;
  updatedAt: Date;
} 