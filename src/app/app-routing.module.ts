import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { ContactComponent } from './components/contact/contact.component';
import { PlanYourTripComponent } from './components/plan-your-trip/plan-your-trip.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DestinationComponent } from './components/destination/destination.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinos', component: DestinationsComponent},
  { path: 'destino/:id', component: DestinationComponent},
  { path: 'hoteles', component: HotelsComponent},
  { path: 'hotel/:id', component: HotelComponent},
  { path: 'planea-tu-viaje', component: PlanYourTripComponent},
  { path: 'itinerario', component: ItineraryComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/register', component: RegisterComponent},
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
