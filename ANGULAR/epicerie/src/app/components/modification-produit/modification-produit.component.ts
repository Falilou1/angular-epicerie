import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-modification-produit',
  templateUrl: './modification-produit.component.html',
  styleUrls: ['./modification-produit.component.scss']
})
export class ModificationProduitComponent implements OnInit {

id: number = this.activatedRoute.snapshot.params['id'];

product: Product = this._products.readProduct(this.id);
success: string = '';

constructor(private activatedRoute: ActivatedRoute,
   private _products: ProductsService,
   private _router: Router
   ) {
    if (!this.product) {
      this._router.navigate(['products'], { queryParams: {noproduct: true} });
    }
   }

ngOnInit(): void {
console.log(this.activatedRoute.snapshot.params['id'])
}

onSuccess(message: string) {
  this.success = message;
}





}


