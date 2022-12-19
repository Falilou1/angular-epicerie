import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';
import { ErrorComponent } from './components/error/error.component';
import { ModificationProduitComponent } from './components/modification-produit/modification-produit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RoutingComponent } from './components/routing/routing.component';

const routes: Routes = [
  {path: 'routing', component: RoutingComponent},
  {path: 'ajouter', component: AjoutProduitComponent},
  {path: 'products/:id', component: ModificationProduitComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
