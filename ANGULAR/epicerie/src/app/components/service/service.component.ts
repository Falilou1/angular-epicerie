import { Component } from '@angular/core';
import { AnimauxService } from 'src/app/services/animaux.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
constructor (private _animaux: AnimauxService) {
}
getPropriete: string = this._animaux.testPropriete;
getMethode(): string {
return this._animaux.testMethode();
  }
}
