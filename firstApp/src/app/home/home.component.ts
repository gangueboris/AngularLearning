import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>

<!--==================================== SEARCH RESULTS ==============================-->
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filterLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Define a list of housing locations
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService); // Inject the HousingService service
  filterLocationList: HousingLocation[] = [];
  constructor() {
      this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList; // like append
      //this.filterLocationList = housingLocationList;
    }); // then provide an array function
  }

  filterResults(search: string): void {
    // if there is no search, display all locations
    if(!search) this.filterLocationList = this.housingLocationList;
    this.filterLocationList = this.housingLocationList.filter(
    (housingLocation) => housingLocation?.city.toLowerCase().includes(search.toLowerCase())
  );


  }




}
