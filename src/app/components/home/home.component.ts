import { Component, OnInit } from '@angular/core';
import  { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  public states = [];
  public state = '';

  ngOnInit() {
    this.dataApi.readAllState().subscribe(states => {
      console.log('Estados', states)
    })
  }

}
