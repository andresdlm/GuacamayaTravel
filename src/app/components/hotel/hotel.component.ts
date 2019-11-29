import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { HotelInterface } from '../../models/hotel';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  public hotel: HotelInterface = {};
  latitude: number;
  longitude: number;
  zoom: number;

  ngOnInit() {
    const idHotel = this.route.snapshot.params['id'];
    this.getDetails(idHotel);
  }

  getDetails(idHotel: string): void {
    this.dataApi.readOneHotel(idHotel).subscribe(hotel => {
      this.hotel = hotel;
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = Number.parseFloat(this.hotel.latitude);
        this.longitude = Number.parseFloat(this.hotel.longitude);
        //this.zoom = 15;
      });
    }
  }

}
