import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CategoryInterface } from '../../models/category';
import { StateInterface } from '../../models/state';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

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
