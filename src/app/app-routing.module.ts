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
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { CitiesAdminComponent } from './components/admin/cities-admin/cities-admin.component';
import { DestinationsAdminComponent } from './components/admin/destinations-admin/destinations-admin.component';
import { HotelsAdminComponent } from './components/admin/hotels-admin/hotels-admin.component';
import { RoomsAdminComponent } from './components/admin/rooms-admin/rooms-admin.component';
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';
import { StatesAdminComponent } from './components/admin/states-admin/states-admin.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinos', component: DestinationsComponent },
  { path: 'destino/:id', component: DestinationComponent },
  { path: 'hoteles', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelComponent },
  { path: 'planea-tu-viaje', component: PlanYourTripComponent },
  { path: 'itinerario', component: ItineraryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminNavigationComponent,
    children: [
      { path: '', component: DashboardAdminComponent },
      { path: 'destinos', component: DestinationsAdminComponent },
      { path: 'hoteles', component: HotelsAdminComponent },
      { path: 'habitaciones', component: RoomsAdminComponent },
      { path: 'ordenes', component: OrdersAdminComponent },
      { path: 'estados', component: StatesAdminComponent },
      { path: 'ciudades', component: CitiesAdminComponent },
    ]
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
