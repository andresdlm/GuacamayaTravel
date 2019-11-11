import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { StateInterface } from 'src/app/models/state';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-states-admin',
  templateUrl: './states-admin.component.html',
  styleUrls: ['./states-admin.component.scss']
})
export class StatesAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private states: StateInterface[];

  ngOnInit() {
    this.getListStates();
  }

  getListStates() {
    this.dataApi.readAllState().subscribe(states => {
      this.states = states;
    });
  }

  onDeleteStates(idState: string): void {
    const confirmacion = confirm('¿Estas seguro de eliminar la estado?');
    if (confirmacion) {
      this.dataApi.deleteState(idState);
    }
  }

  onPreUpdateState(state: StateInterface) {
    this.dataApi.selectedState = Object.assign({}, state)
  }

}
