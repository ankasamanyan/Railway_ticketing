import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor (private http: HttpClient) {}

  private backendUrl = 'http://localhost:3000'

  public getDepartureData(): Observable <any[]> {
    return this.http.get<any>(`${this.backendUrl}/station/departure`);
  }
  
  public getArrivalData(): Observable <any[]> {
    return this.http.get<any>(`${this.backendUrl}/station/arrival`);
  }

  public getTicketData(departure: any, arrival: any): Observable <any> {

    // let params = new HttpParams().set("departure", departure).set("arrival", arrival);
    let params = new HttpParams().set("param1", 1);

    return this.http.get(`${this.backendUrl}/train/searchTicket`, {params: params}); 
    
    
    
    // this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { search: params });
    // const url = `${this.backendUrl}/train/searchTicket?departure=${departure}&arrival=${arrival}`
    // return this.http.get<any>(url);
  }

}
