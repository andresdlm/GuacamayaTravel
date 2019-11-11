import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
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
import { CategoriesAdminComponent } from './components/admin/categories-admin/categories-admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinos', component: DestinationsComponent },
  { path: 'destino/:id', component: DestinationComponent },
  { path: 'hoteles', component: HotelsComponent },
  { path: 'hotel/:id', component: HotelComponent },
  { path: 'planea-tu-viaje', component: PlanYourTripComponent },
  { path: 'itinerario', component: ItineraryComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/register', component: RegisterComponent },
  { path: 'admin',
    component: AdminNavigationComponent, canActivateChild: [AuthGuard],
    children: [
      { path: '', component: DashboardAdminComponent },
      { path: 'destinos', component: DestinationsAdminComponent },
      { path: 'hoteles', component: HotelsAdminComponent },
      { path: 'habitaciones', component: RoomsAdminComponent },
      { path: 'ordenes', component: OrdersAdminComponent },
      { path: 'ciudades', component: CitiesAdminComponent },
      { path: 'estados', component: StatesAdminComponent },
      { path: 'categorias', component: CategoriesAdminComponent },
    ]
  },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
