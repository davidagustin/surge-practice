import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-detail.html',
  styleUrl: './property-detail.css'
})
export class PropertyDetailComponent implements OnInit {
  property: Property | undefined;
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.loadProperty();
  }

  loadProperty(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.propertyService.getPropertyById(id).subscribe(property => {
      this.property = property;
    });
  }

  setCurrentImage(index: number): void {
    this.currentImageIndex = index;
  }

  nextImage(): void {
    if (this.property && this.currentImageIndex < this.property.images.length - 1) {
      this.currentImageIndex++;
    }
  }

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
} 