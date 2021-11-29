import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ficha } from '../models/fichas';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FichasService {
  url_api = 'http://localhost:3000/api/fichas';
  constructor(private _http: HttpClient) { }

  getFichas() {
    return this._http.get<Ficha[]>(this.url_api + '/get');
  }

  getFicha(id: any) {
    return this._http.get<Ficha[]>(this.url_api + '/get1/' + id);
  }
  
  addFicha(ficha: NgForm) {
    return this._http.post(this.url_api + '/post', ficha);
  }

  deleteFicha(id: string) {
    return this._http.delete(this.url_api + '/delete'+ '/' + id);
  }
 
}
