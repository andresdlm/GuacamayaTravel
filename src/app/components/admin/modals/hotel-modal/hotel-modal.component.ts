import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { StateInterface } from 'src/app/models/state';
import { CityInterface } from 'src/app/models/city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.scss']
})
export class HotelModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  private states: StateInterface[];
  private cities: CityInterface[];

  ngOnInit() {
    this.getListStates();
    this.getListCities();
  }

  getListStates() {
    this.dataApi.readAllState().subscribe(states => {
      this.states = states;
    });
  }

  getListCities() {
    this.dataApi.readAllCity().subscribe(cities => {
      this.cities = cities;
    });
  }

  onSaveHotel(hotelForm: NgForm): void {
    if (hotelForm.value.id == null) {
      //new
      this.dataApi.createHotels(hotelForm.value)
    } else {
      //update
      this.dataApi.updateHotels(hotelForm.value);
    }
    this.clearForm(hotelForm)
    this.btnClose.nativeElement.click();
  }

  clearForm(hotelForm: NgForm): void {
    hotelForm.resetForm();
  }

}
