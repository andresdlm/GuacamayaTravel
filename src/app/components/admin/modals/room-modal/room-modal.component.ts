import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { RoomInterface } from 'src/app/models/room';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-room-modal',
  templateUrl: './room-modal.component.html',
  styleUrls: ['./room-modal.component.scss']
})
export class RoomModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  ngOnInit() {
  }
 
  onSaveRoom(roomForm: NgForm): void {
    if (roomForm.value.id == null){
      //Nuevo
      this.dataApi.createRoom(roomForm.value);
    } else {
      //Modificar
      this.dataApi.updateRoom(roomForm.value);
    }
    roomForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
