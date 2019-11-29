import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CategoryInterface } from '../../models/category';
import { StateInterface } from '../../models/state';
import { HotelInterface } from 'src/app/models/hotel';

@Component({
  selector: 'app-plan-your-trip',
  templateUrl: './plan-your-trip.component.html',
  styleUrls: ['./plan-your-trip.component.scss']
})
export class PlanYourTripComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild("statesInput", { static: false }) stateInput: ElementRef;
  @ViewChild("categoryInput", { static: false }) categoryInput: ElementRef;

  private categories: CategoryInterface[];
  private states: StateInterface[];
  private hotels: HotelInterface[];

  ngOnInit() {
    this.getListCategories();
    this.getListStates();
    this.getListHotels();
  }

  getListCategories(): void {
    this.dataApi.readAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  getListStates(): void {
    this.dataApi.readAllState().subscribe(states => {
      this.states = states;
    });
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
  
  getFiltered(){
    this.hotels = this.hotels.filter(hotel => (hotel.state === this.stateInput.nativeElement.value));
  }

}
