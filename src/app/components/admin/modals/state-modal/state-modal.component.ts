import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../../../services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-state-modal',
  templateUrl: './state-modal.component.html',
  styleUrls: ['./state-modal.component.scss']
})
export class StateModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveState(stateForm: NgForm): void {
    if (stateForm.value.id == null) {
      //new
      this.dataApi.createState(stateForm.value)
    } else {
      //update
      this.dataApi.updateState(stateForm.value);
    }
    this.clearForm(stateForm)
    this.btnClose.nativeElement.click();
  }

  clearForm(stateForm: NgForm): void {
    stateForm.resetForm();
  }

}
