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

  ngOnInit() {
    const idDestination = this.route.snapshot.params['id'];
    this.getDetails(idDestination);
  }

  getDetails(idDestination: string): void {
    this.dataApi.readOneDestination(idDestination).subscribe(destination => {
      this.destination = destination;
    });
  }

}
