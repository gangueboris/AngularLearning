import { Injectable } from '@angular/core'; // injection means any component can request an instance of this service
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations"; // URL to web api
 
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
   const response = await fetch(this.url);
   return await response.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> { // undifined because the data can be not found
    const response = await fetch(`${this.url}/${id}`);
    return await response.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application submitted for ${firstName} ${lastName} with email ${email}`);
  }

 
}
