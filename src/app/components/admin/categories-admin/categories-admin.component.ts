import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { CategoryInterface } from '../../../models/category';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-categories-admin',
  templateUrl: './categories-admin.component.html',
  styleUrls: ['./categories-admin.component.scss']
})
export class CategoriesAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  private categories: CategoryInterface[];

  ngOnInit() {
    this.getListCategories();
  }

  getListCategories() {
    this.dataApi.readAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

}
