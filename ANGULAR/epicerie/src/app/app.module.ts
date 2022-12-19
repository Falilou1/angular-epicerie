import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AnimauxService } from './services/animaux.service';
import { ServiceComponent } from './components/service/service.component';
import { ProductsService } from './services/products.service';
import { RoutingComponent } from './components/routing/routing.component';
import { ErrorComponent } from './components/error/error.component';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';
import { ModificationProduitComponent } from './components/modification-produit/modification-produit.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ModificationProduitFormComponent } from './components/modification-produit-form/modification-produit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DirectivesComponent,
    ProductListComponent,
    PipesComponent,
    ServiceComponent,
    RoutingComponent,
    ErrorComponent,
    AjoutProduitComponent,
    ModificationProduitComponent,
    ProductCardComponent,
    FormulaireComponent,
    ModificationProduitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AnimauxService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
