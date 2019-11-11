import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { DestinationInterface } from 'src/app/models/destination';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-destination-modal',
  templateUrl: './destination-modal.component.html',
  styleUrls: ['./destination-modal.component.scss']
})
export class DestinationModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveDestination(destinationForm: NgForm): void {
    if (destinationForm.value.id == null){
      //Nuevo
      this.dataApi.createDestination(destinationForm.value);
    } else {
      //Modificar
      this.dataApi.updateDestination(destinationForm.value);
    }
    destinationForm.resetForm();
    this.btnClose.nativeElement.click();
  }

}
