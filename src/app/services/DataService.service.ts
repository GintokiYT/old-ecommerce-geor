import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  textoGuardado: string;

  guardarTexto(texto: string) {
    this.textoGuardado = texto;
  }
}
