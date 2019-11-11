import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataApiService } from '../../../../services/data-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss']
})
export class CategoryModalComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  @ViewChild('btnClose', {static: false}) btnClose: ElementRef;
  
  ngOnInit() {
  }

  onSaveCategory(categoryForm: NgForm): void {
    if (categoryForm.value.id == null) {
      //new
      this.dataApi.createCategory(categoryForm.value)
    } else {
      //update
      this.dataApi.updateCategory(categoryForm.value);
    }
    this.clearForm(categoryForm)
    this.btnClose.nativeElement.click();
  }

  clearForm(categoryForm: NgForm): void {
    categoryForm.resetForm();
  }

}
