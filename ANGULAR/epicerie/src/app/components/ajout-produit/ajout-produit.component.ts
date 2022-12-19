import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent {
  @Output() successCreate = new EventEmitter<string>();
  constructor(private _products: ProductsService) {};
  onSubmit(productForm: NgForm) {
    this._products.create(productForm.value)
    this.successCreate.emit('Nouveau produit crée avec succès!')
    productForm.resetForm();
  }










}
