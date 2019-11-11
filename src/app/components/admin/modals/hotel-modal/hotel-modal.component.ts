import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { HotelInterface } from 'src/app/models/hotel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.component.html',
  styleUrls: ['./hotel-modal.component.scss']
})
export class HotelModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveHotel(hotelForm: NgForm): void {
    if (hotelForm.value.id == null){
      //Nuevo
      this.dataApi.createHotels(hotelForm.value);
    } else {
      //Modificar
      this.dataApi.updateHotels(hotelForm.value);
    }
    hotelForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
