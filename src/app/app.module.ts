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
import { AngularFirestore } from '@angular/fire/firestore';
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { HotelsAdminComponent } from './components/admin/hotels-admin/hotels-admin.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DestinationsAdminComponent } from './components/admin/destinations-admin/destinations-admin.component';
import { OrdersAdminComponent } from './components/admin/orders-admin/orders-admin.component';
import { StatesAdminComponent } from './components/admin/states-admin/states-admin.component';
import { CitiesAdminComponent } from './components/admin/cities-admin/cities-admin.component';
import { RoomsAdminComponent } from './components/admin/rooms-admin/rooms-admin.component';
import { ModalComponent } from './components/admin/modal/modal.component';
import { AdminNavigationComponent } from './navigation/admin-navigation/admin-navigation.component';

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
    ModalComponent,
    AdminNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
