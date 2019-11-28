import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { CategoryInterface } from '../../models/category';
import { StateInterface } from '../../models/state';
import { DestinationInterface } from '../../models/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild("statesInput", { static: false }) stateInput: ElementRef;
  @ViewChild("categoryInput", { static: false }) categoryInput: ElementRef;

  private destinations: DestinationInterface[];
  private categories: CategoryInterface[];
  private states: StateInterface[];

  ngOnInit() {
    this.getListCategories();
    this.getListStates();
    this.getListDestinations();
  }

  getListDestinations(): void {
    this.dataApi.readAllDestination().subscribe(destinations => {
      this.destinations = destinations;
    });
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

  getFiltered(){
    this.destinations = this.destinations.filter(destination => (destination.state === this.stateInput.nativeElement.value) || (destination.category === this.categoryInput.nativeElement.value)); 
  }

}
