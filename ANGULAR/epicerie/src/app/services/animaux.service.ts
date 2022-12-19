import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimauxService {
testPropriete: string = 'propriete fonctionne!';
testMethode(): string {
  return 'Methode fonctionne'
}
  
}
