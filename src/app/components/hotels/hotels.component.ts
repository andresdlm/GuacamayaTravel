import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { HotelInterface } from '../../models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

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
