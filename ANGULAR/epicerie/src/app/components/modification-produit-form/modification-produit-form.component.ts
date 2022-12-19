import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { NgForm } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modification-produit-form',
  templateUrl: './modification-produit-form.component.html',
  styleUrls: ['./modification-produit-form.component.scss']
})
export class ModificationProduitFormComponent {
@Input() product: Product;
@Input() id: number;
@Output() successCreate = new EventEmitter<string>();
constructor(private _products : ProductsService) {}
onSubmit(productForm: NgForm) {
this._products.update(this.id, productForm.value);
this.successCreate.emit('Produit modifié avec succès!')
}











}
