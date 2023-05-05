import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor( private http: HttpClient) { }

  private API_FIRE='https://app-web2-ves-default-rtdb.firebaseio.com/personal.json'

  //MÉTODO POST
  postPersonal(user: any): Observable<any>{
    return this.http.post(this.API_FIRE, user)
  }

  //MÉTODO GET
  getPersonal():Observable <any>{
    return this.http.get(this.API_FIRE)
  }

}
