import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { DestinationInterface } from 'src/app/models/destination';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-destinations-admin',
  templateUrl: './destinations-admin.component.html',
  styleUrls: ['./destinations-admin.component.scss']
})
export class DestinationsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private destinations: DestinationInterface[];

  ngOnInit() {
    this.getListDestinations();
  }

  getListDestinations(): void {
    this.dataApi.readAllDestination().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

  onDeleteDestination(idDestination: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar el destino?');
    if (confirmacion) {
      this.dataApi.deleteDestination(idDestination);
    }
  }
  
  onPreUpdateDestination(destination: DestinationInterface): void {
    this.dataApi.selectedDestination = Object.assign({}, destination);
  }

}