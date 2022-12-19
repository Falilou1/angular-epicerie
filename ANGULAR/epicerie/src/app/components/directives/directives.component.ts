import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/animal';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
colorTs: string = '#ff0000';
valid: boolean = false;
animaux: string [] = ['Chien', 'Chat', 'Mouton', 'Aigle'];
animauxObjet: Animal [] = [
    {name:'Chien', quantity: 10},
    {name:'Chat', quantity: 1},
    {name:'Mouton', quantity: 50},
    {name:'Aigle', quantity: 5}
  ];












}
