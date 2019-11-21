import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { DestinationInterface } from 'src/app/models/destination';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-destinations-admin',
  templateUrl: './destinations-admin.component.html',
  styleUrls: ['./destinations-admin.component.scss']
})
export class DestinationsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;
  @ViewChild('image', {static: false}) inputImageUser: ElementRef;

  private destinations: DestinationInterface[];
  private ID: string;
  urlImage: Observable<string>;

  ngOnInit() {
    this.getListDestinations();
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

  onUpload(e) {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `destinos/${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
    // LLama al boton submit
    alert("Espera a que se haya cargado la imagen");
    setTimeout(() => {
      this.btnSubmit.nativeElement.click();
    }, 10000);
  }

  saveIMG(destinationForm: NgForm): void {
    // Recibe un NgForm con el valor de la imagen
    destinationForm.value.imgSRC = this.inputImageUser.nativeElement.value;
    destinationForm.value.id = this.ID;
    this.dataApi.updateDestination(destinationForm.value);
    alert("Se ha subido la imagen");
  }

  getListDestinations(): void {
    this.dataApi.readAllDestination().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

  onDeleteDestination(idDestination: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar el destino?');
    if (confirmacion) {
      this.dataApi.deleteDestination(idDestination);
    }
  }
  
  onPreUpdateDestination(destination: DestinationInterface): void {
    this.dataApi.selectedDestination = Object.assign({}, destination);
  }

}