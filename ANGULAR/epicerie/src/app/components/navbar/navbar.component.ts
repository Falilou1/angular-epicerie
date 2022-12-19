import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  title = 'Yes!! F.M.';
  price = 10;
  total = 4;
  more = false;
constructor() {
  console.log("navbar t")
  if(this.total > 3) this.more = true;
}
tva (amount: number , taxe: number) {
  return amount * taxe / 100;
}
loadMore () {
  console.log("Loading more");
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  $('#test').on('click', function(){
      $(this).hide();
  })
}





}
