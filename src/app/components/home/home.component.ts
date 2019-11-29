import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import  { DataApiService } from '../../services/data-api.service';
import { HotelInterface } from '../../models/hotel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public states = [];
  public state = '';
  
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
