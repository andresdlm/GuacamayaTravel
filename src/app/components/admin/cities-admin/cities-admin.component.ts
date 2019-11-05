import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CityInterface } from '../../../models/city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cities-admin',
  templateUrl: './cities-admin.component.html',
  styleUrls: ['./cities-admin.component.scss']
})
export class CitiesAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private cities: CityInterface[];

  ngOnInit() {
    this.getListCities();
  }

  getListCities() {
    this.dataApi.readAllCity().subscribe(cities => {
      this.cities = cities;
    });
  }
  

  onDeleteCity() {
    console.log('DELETE CITY')
  }

}
