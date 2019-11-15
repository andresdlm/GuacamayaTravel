import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { HotelInterface } from 'src/app/models/hotel';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-hotels-admin',
  templateUrl: './hotels-admin.component.html',
  styleUrls: ['./hotels-admin.component.scss']
})
export class HotelsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;

  private hotels: HotelInterface[];
  private ID: string;
  
  ngOnInit() {
    this.getListHotels();
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

  onUpload(e, hotel): void {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `hoteles/${id}`;
    this.storage.ref(filePath);
    this.storage.upload(filePath, file);
    hotel.imgSRC = filePath;
    // LLama al boton submit
    this.btnSubmit.nativeElement.click();
  }

  saveIMG(hotelForm: NgForm, src: string): void {
    // Recibe un NgForm con el valor de la imagen
    hotelForm.value.imgSRC = src;
    hotelForm.value.id = this.ID;
    this.dataApi.updateHotels(hotelForm.value);
    alert("Se ha subido la imagen");
  }

  getListHotels(): void {
    this.dataApi.readAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    });
  }

  onDeleteHotel(idHotel: string): void {
    const confirmacion = confirm('¿Estas seguro de que eliminar el hotel?');
    if (confirmacion) {
      this.dataApi.deleteHotels(idHotel);
    }
  }

  onPreUpdateHotel(hotel: HotelInterface): void {
    this.dataApi.selectedHotel = Object.assign({}, hotel);
  }

}
