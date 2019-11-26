import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { DestinationInterface } from '../../models/destination';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  public destination: DestinationInterface = {};
  latitude: number;
  longitude: number;
  zoom:number;

  ngOnInit() {
    const idDestination = this.route.snapshot.params['id'];
    this.getDetails(idDestination);
  }

  getDetails(idDestination: string): void {
    this.dataApi.readOneDestination(idDestination).subscribe(destination => {
      this.destination = destination;
      console.log("Latitud: ", Number.parseFloat(this.destination.latitude));
      console.log("Longitud: ", Number.parseFloat(this.destination.longitude));
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = Number.parseFloat(this.destination.latitude);
        this.longitude = Number.parseFloat(this.destination.longitude);
        //this.zoom = 15;
      });
    }
  }

}