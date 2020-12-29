import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:8081/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(baseUrl);
  }


}
