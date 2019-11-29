import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { HotelInterface } from '../../models/hotel';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private hotels: HotelInterface[];

  ngOnInit() {
    this.getListHotels();
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }



}
