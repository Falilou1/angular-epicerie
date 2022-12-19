import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit  {
fruits: Product[] = [];
error: string = '';
constructor (private _products: ProductsService, private activatedRoute: ActivatedRoute) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.fruits = this._products.readProducts();
  if (this.activatedRoute.snapshot.queryParams['noproduct']) {
    this.error = 'Ce produit n\'existe pas'
  }
}
delete(i: number) {
  this._products.delete(i);
  }









}
