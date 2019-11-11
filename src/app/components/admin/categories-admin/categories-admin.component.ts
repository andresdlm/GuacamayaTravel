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

  onDeleteCategory(idCategory: string) {
    const confirmation = confirm('¿Estas seguro de eliminar esta categoria?')
    if(confirmation) {
      this.dataApi.deleteCategory(idCategory);
    }
  }

  onPreUpdateCategory(category: CategoryInterface) {
    this.dataApi.selectedCategory = Object.assign({}, category)
  }

}
