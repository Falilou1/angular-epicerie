import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  fruits: Product [] = [
    {name: 'Cerise', img: '/assets/cerise.jpg', price: 5, stock: 10},
    {name: 'Citron', img: '/assets/citron.jpg', price: 4, stock: 4},
    {name: 'Fraise', img: '/assets/fraise.jpg', price: 3, stock: 2},
    {name: 'Raisin', img: '/assets/raisin.jpg', price: 6, stock: 15},
    {name: 'Pomme', img: '/assets/pomme.jpg', price: 7, stock: 5},
    {name: 'Pasteque', img: '/assets/pasteque.jpg', price: 8, stock: 3},
    {name: 'Mangue', img: '/assets/mangue.jpg', price: 10, stock: 7},
    {name: 'Abricot', img: '/assets/abricot.jpg', price: 13, stock: 9},
    {name: 'Poire', img: '/assets/poire.jpg', price: 5, stock: 1},
    {name: 'Orange', img: '/assets/orange.jpg', price: 2, stock: 17},
    ];

readProducts() {
  return this.fruits
}

readProduct(id: number) {
  return this.fruits[id];
}


delete(i: number) {
this.fruits.splice(i, 1);
}

create(product: Product) {
  this.fruits.push(product);
}

update(id: number, product: Product) {
this.fruits.splice(id, 1, product);
}
}
