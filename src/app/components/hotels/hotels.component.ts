import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { HotelInterface } from '../../models/hotel';
import { DestinationInterface } from 'src/app/models/destination';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  
  @ViewChild("destinationsInput", { static: false }) destinationInput: ElementRef;

  private hotels: HotelInterface[];
  private destinations: DestinationInterface[];

  
  ngOnInit() {
    this.getListHotels();
    this.getListDestinations();
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  getListDestinations(): void {
    this.dataApi.readAllDestination().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

}
