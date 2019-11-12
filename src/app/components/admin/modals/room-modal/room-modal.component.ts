import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { HotelInterface } from 'src/app/models/hotel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  private hotels: HotelInterface[]; 

  ngOnInit() {
    this.getListHotels();
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }
 
  onSaveRoom(roomForm: NgForm): void {
    if (roomForm.value.id == null){
      //new
      this.dataApi.createRoom(roomForm.value);
    } else {
      //update
      this.dataApi.updateRoom(roomForm.value);
    }
    this.clearForm(roomForm);
    this.btnClose.nativeElement.click();
  }

  clearForm(roomForm: NgForm): void {
    roomForm.resetForm();
  }

}
