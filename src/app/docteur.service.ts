import { Docteur } from './docteur.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {

  constructor(private http: HttpClient) { }

 api = 'http://localhost:3000/docteurs';

   all(): Observable<Docteur[]> {
    return this.http.get<Docteur[]>(`${this.api}`);
  }
 
  getDocteur(id: number): Observable<Docteur> {
    return this.http.get<Docteur>(`${this.api}/${id}`);
  }
  

  nouveau(data: any): Observable<any> {
    return this.http.post(`${this.api}`, data);
  }

  modifier(id: any, data: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, data);
  }

  supprimer(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
