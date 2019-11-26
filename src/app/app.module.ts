import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { DestinationComponent } from './components/destination/destination.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PlanYourTripComponent } from './components/plan-your-trip/plan-your-trip.component';
import { LoginComponent } from './components/admin/login/login.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { HotelsAdminComponent } from './components/admin/hotels-admin/hotels-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DestinationsAdminComponent } from './components/admin/destinations-admin/destinations-admin.component';
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';
import { StatesAdminComponent } from './components/admin/states-admin/states-admin.component';
import { CitiesAdminComponent } from './components/admin/cities-admin/cities-admin.component';
import { RoomsAdminComponent } from './components/admin/rooms-admin/rooms-admin.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';
import { CityModalComponent } from './components/admin/modals/city-modal/city-modal.component';
import { StateModalComponent } from './components/admin/modals/state-modal/state-modal.component';
import { RoomModalComponent } from './components/admin/modals/room-modal/room-modal.component';
import { OrderModalComponent } from './components/admin/modals/order-modal/order-modal.component';
import { HotelModalComponent } from './components/admin/modals/hotel-modal/hotel-modal.component';
import { DestinationModalComponent } from './components/admin/modals/destination-modal/destination-modal.component';
import { CategoryModalComponent } from './components/admin/modals/category-modal/category-modal.component';
import { CategoriesAdminComponent } from './components/admin/categories-admin/categories-admin.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DestinationsComponent,
    HotelsComponent,
    HotelComponent,
    DestinationComponent,
    ContactComponent,
    ItineraryComponent,
    PaymentComponent,
    PlanYourTripComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    SideBarComponent,
    HotelsAdminComponent,
    DashboardAdminComponent,
    DestinationsAdminComponent,
    OrdersAdminComponent,
    StatesAdminComponent,
    CitiesAdminComponent,
    RoomsAdminComponent,
    AdminNavigationComponent,
    CityModalComponent,
    StateModalComponent,
    RoomModalComponent,
    OrderModalComponent,
    HotelModalComponent,
    DestinationModalComponent,
    CategoryModalComponent,
    CategoriesAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAEEjmbqo_KYPndKWsbigIJPEDcXdt0uRQ',
      libraries: ['places']
    })
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
