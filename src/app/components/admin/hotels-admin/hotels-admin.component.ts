import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { HotelInterface } from 'src/app/models/hotel';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-hotels-admin',
  templateUrl: './hotels-admin.component.html',
  styleUrls: ['./hotels-admin.component.scss']
})
export class HotelsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private hotels: HotelInterface[];

  ngOnInit() {
    this.getListHotels();
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  onDeleteHotels(idHotel: string): void {
    const confirmacion = confirm('¿Estas seguro de que eliminar el hotel?');
    if (confirmacion) {
      this.dataApi.deleteHotels(idHotel);
    }
  }



}
