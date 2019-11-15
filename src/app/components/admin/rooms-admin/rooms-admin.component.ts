import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { RoomInterface } from 'src/app/models/room';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-rooms-admin',
  templateUrl: './rooms-admin.component.html',
  styleUrls: ['./rooms-admin.component.scss']
})
export class RoomsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;

  private rooms: RoomInterface[];
  private ID: string;

  ngOnInit() {
    this.getListRooms();
  }

  onClick(imgSRC, id): void {
    this.ID = id;
    if (imgSRC != undefined) {
      let confirmation: boolean = confirm("Ya existe una imagen cargada ¿Deseas reemplazarla?");
      if(confirmation) {
        this.btnFile.nativeElement.click();
      }
    } else {
      this.btnFile.nativeElement.click();
    }
  }

  onUpload(e, room): void {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `habitaciones/${id}`;
    this.storage.ref(filePath);
    this.storage.upload(filePath, file);
    room.imgSRC = filePath;
    // LLama al boton submit
    this.btnSubmit.nativeElement.click();
  }

  saveIMG(roomForm: NgForm, src: string): void {
    // Recibe un NgForm con el valor de la imagen
    roomForm.value.imgSRC = src;
    roomForm.value.id = this.ID;
    this.dataApi.updateRoom(roomForm.value);
    alert("Se ha subido la imagen");
  }

  getListRooms() {
    this.dataApi.readAllRoom().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  onDeleteRoom(idRoom: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar la habitación?');
    if (confirmacion) {
      this.dataApi.deleteRoom(idRoom);
    }
  }

  onPreUpdateRoom(room: RoomInterface) {
    this.dataApi.selectedRoom = Object.assign({}, room);
  }

}
