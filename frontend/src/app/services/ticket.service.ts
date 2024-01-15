import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor( private http: HttpClient) {}

  private backendUrl = 'http://localhost:3000'

}

