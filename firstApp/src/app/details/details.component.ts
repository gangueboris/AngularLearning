import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{housingLocationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
    router: ActivatedRoute = inject(ActivatedRoute); // Inject the ActivatedRoute service
    housingLocationId = 0;
    constructor() {
      this.housingLocationId = Number(this.router.snapshot.params['id']); // Get the id from the route
    }
}
