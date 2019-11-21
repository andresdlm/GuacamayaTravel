import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { HotelInterface } from 'src/app/models/hotel';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-hotels-admin',
  templateUrl: './hotels-admin.component.html',
  styleUrls: ['./hotels-admin.component.scss']
})
export class HotelsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;
  @ViewChild('image', {static: false}) inputImageUser: ElementRef;

  private hotels: HotelInterface[];
  private ID: string;
  urlImage: Observable<string>;
  
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

  onUpload(e): void {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `hoteles/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    // LLama al boton submit
    alert("Espera a que se haya cargado la imagen");
    setTimeout(() => {
      this.btnSubmit.nativeElement.click();
    }, 9000);
  }

  saveIMG(hotelForm: NgForm): void {
    // Recibe un NgForm con el valor de la imagen
    hotelForm.value.imgSRC = this.inputImageUser.nativeElement.value;
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
