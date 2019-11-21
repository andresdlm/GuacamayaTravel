import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { RoomInterface } from 'src/app/models/room';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-rooms-admin',
  templateUrl: './rooms-admin.component.html',
  styleUrls: ['./rooms-admin.component.scss']
})
export class RoomsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;
  @ViewChild('image', {static: false}) inputImageUser: ElementRef;

  private rooms: RoomInterface[];
  private ID: string;
  urlImage: Observable<string>;

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

  onUpload(e): void {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `habitaciones/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    // LLama al boton submit
    alert("Espera a que se haya cargado la imagen");
    setTimeout(() => {
      this.btnSubmit.nativeElement.click();
    }, 10000);
  }

  saveIMG(roomForm: NgForm): void {
    // Recibe un NgForm con el valor de la imagen
    roomForm.value.imgSRC = this.inputImageUser.nativeElement.value;
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
