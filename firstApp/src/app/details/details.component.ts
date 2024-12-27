import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { last } from 'rxjs';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
      <article>
        <img [src]="housingLocation?.photo" alt="" class="listing-photo">
        <section class="listing-heading">
          <h2 class="listing-location">{{housingLocation?.name}}</h2>
          <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
        </section>
        <section class="listiong-features">
          <h2 class="section-heading">About this location</h2>
          <ul>
              <li>Units available: {{housingLocation?.availableUnits}}</li>
              <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
              <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
          </ul>
        </section>
        <section class="listing-apply">
            <h2 class="section-heading">Apply new to live here</h2>
            <form [formGroup]="applyForm" (ngSubmit)="submitApplication()">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" formControlName="firstName">
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" formControlName="lastName">
              <label for="email">Email</label>
              <input type="email" id="email" formControlName="email">
              <button class="primary" type="submit">Apply</button>
            </form>

        </section>

      </article>
    <!-- ? is the safe navigation operator ? check if value not null or undefined -->
  
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    router: ActivatedRoute = inject(ActivatedRoute); // Inject the ActivatedRoute service
    housingService = inject(HousingService); 
    housingLocation: HousingLocation | undefined;
    applyForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('')
    });

    constructor() {
      const housingLocationId = Number(this.router.snapshot.params['id']); // Get the id from the route
      //Before: this.housingLocation = this.housingService.getHousingLocationById(housingLocationId); 
      this.housingService.getHousingLocationById(housingLocationId).then((housingLocation: HousingLocation | undefined) => {
        this.housingLocation = housingLocation;
      });

    }
    
    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? ''
      );
    }



}

/*
  How do
*/