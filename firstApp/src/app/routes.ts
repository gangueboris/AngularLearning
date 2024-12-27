import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id', // Define a route parameter match with id
        component: DetailsComponent,
        title: 'Details Page'
    }
]; // Define an empty array of routes

export default routeConfig; 

