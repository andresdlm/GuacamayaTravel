import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { StateInterface } from 'src/app/models/state';
import { CategoryInterface } from 'src/app/models/category';
import { CityInterface } from 'src/app/models/city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.component.html',
  styleUrls: ['./destination-modal.component.scss']
})
export class DestinationModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  private states: StateInterface[];
  private cities: CityInterface[];
  private categories: CategoryInterface[];

  ngOnInit() {
    this.getListStates();
    this.getListCategories();
    this.getListCities();
  }

  getListStates(): void {
    this.dataApi.readAllState().subscribe(states => {
      this.states = states;
    });
  }

  getListCategories(): void {
    this.dataApi.readAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

  getListCities(): void {
    this.dataApi.readAllCity().subscribe(cities => {
      this.cities = cities;
    });
  }

  onSaveDestination(destinationForm: NgForm): void {
    if (destinationForm.value.id == null) {
      //new
      this.dataApi.createDestination(destinationForm.value)
    } else {
      //update
      this.dataApi.updateDestination(destinationForm.value);
    }
    this.clearForm(destinationForm);
    this.btnClose.nativeElement.click();
  }

  clearForm(destinationForm: NgForm): void {
    destinationForm.resetForm();
  }

}
