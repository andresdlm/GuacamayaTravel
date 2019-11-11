import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../../../services/data-api.service';
import { NgForm } from '@angular/forms';
import { StateInterface } from 'src/app/models/state';

@Component({
  selector: 'app-city-modal',
  templateUrl: './city-modal.component.html',
  styleUrls: ['./city-modal.component.scss']
})
export class CityModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  private states: StateInterface[];

  ngOnInit() {
    this.getListStates();
  }

  getListStates() {
    this.dataApi.readAllState().subscribe(states => {
      this.states = states;
    });
  }

  onSaveCity(cityForm: NgForm): void {
    if (cityForm.value.id == null) {
      //new
      this.dataApi.createCity(cityForm.value)
    } else {
      //update
      this.dataApi.updateCity(cityForm.value);
    }
    this.clearForm(cityForm)
    this.btnClose.nativeElement.click();
  }

  clearForm(cityForm: NgForm): void {
    cityForm.resetForm();
  }

}
