import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CategoryInterface } from '../../models/category';
import { StateInterface } from '../../models/state';

@Component({
  selector: 'app-plan-your-trip',
  templateUrl: './plan-your-trip.component.html',
  styleUrls: ['./plan-your-trip.component.scss']
})
export class PlanYourTripComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private categories: CategoryInterface[];
  private states: StateInterface[];

  ngOnInit() {
    this.getListCategories();
    this.getListStates();
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

}
