import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { RoomInterface } from 'src/app/models/room';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-rooms-admin',
  templateUrl: './rooms-admin.component.html',
  styleUrls: ['./rooms-admin.component.scss']
})
export class RoomsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private rooms: RoomInterface[];

  ngOnInit() {
    this.getListRooms();
  }

  getListRooms() {
    this.dataApi.readAllRoom().subscribe(rooms => {
      this.rooms = rooms;
    });
  }

  onDeleteRooms(idRoom: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar la habitación?');
    if (confirmacion) {
      this.dataApi.deleteRoom(idRoom);
    }
  }

  onPreUpdateRoom(room: RoomInterface) {
    console.log('ROOM', room);
    this.dataApi.selectedRoom = Object.assign({}, room);
  }

}
