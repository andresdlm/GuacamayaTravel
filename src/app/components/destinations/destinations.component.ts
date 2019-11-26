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

  searchDestination(formSearch) {
    if(this.categoryInput.nativeElement.value != "Categoría" && this.stateInput.nativeElement.value != "Estado") {
      // Ambos filtros
      
      // const result = words.filter(word => word.length > 6);
    } else if (this.categoryInput.nativeElement.value == "Categoría" && this.stateInput.nativeElement.value != "Estado") {
      // Filtro de Estado

    } else if (this.categoryInput.nativeElement.value != "Categoría" && this.categoryInput.nativeElement.value == "Estado") {
      // Filtro de Categoria

    }
  }

}
