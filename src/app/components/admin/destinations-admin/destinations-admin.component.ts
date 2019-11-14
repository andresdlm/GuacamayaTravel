import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { DestinationInterface } from 'src/app/models/destination';
import { AngularFireStorage } from '@angular/fire/storage';
import { NgForm } from '@angular/forms'
import { Button } from 'protractor';

@Component({
  selector: 'app-destinations-admin',
  templateUrl: './destinations-admin.component.html',
  styleUrls: ['./destinations-admin.component.scss']
})
export class DestinationsAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private storage: AngularFireStorage) { }

  @ViewChild('btnFile', {static: false}) btnFile: ElementRef;
  @ViewChild('btnSubmit', {static: false}) btnSubmit: ElementRef;

  private destinations: DestinationInterface[];

  ngOnInit() {
    this.getListDestinations();
  }

  onClick(): void {
    this.btnFile.nativeElement.click();
  }

  onUpload(e, destination): void {
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `destinos/${id}`;
    this.storage.ref(filePath);
    this.storage.upload(filePath, file);
    destination.imgSRC = filePath;
    // LLama al boton submit
    this.btnSubmit.nativeElement.click();
  }

  saveIMG(destinationForm: NgForm, src: string, id: string): void {
    // Recibe un NgForm con el valor de la imagen
    destinationForm.value.imgSRC = src;
    destinationForm.value.id = id;
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