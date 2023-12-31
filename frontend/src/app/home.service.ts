import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private backendUrl = 'http://localhost:3000'

  constructor( private http: HttpClient) {}

  
  public getArrival(): Observable <any> {
    return this.http.get<any>(`${this.backendUrl}/station/arrival`);
  }
}
