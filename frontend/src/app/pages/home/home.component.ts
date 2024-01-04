import { Component, Injectable, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { HomeService } from '../../services/home.service';
import {FormsModule} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-home',
  standalone: true,
  imports: 
  [
    MatButtonModule, 
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    NgFor,
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: 
  [
    HomeService,
  ]
})



export class HomeComponent implements OnInit {

    public departureDropdownData: any[] = [];
    public departureDropdownProperties: any[] = [];
    
    public arrivalDropdownData: any[] = [];
    public arrivalDropdownProperties: any[] = [];
    public timeTable: any[] = [];

    constructor(private homeService: HomeService){}

    /* getting the data for the dropdowns */
    
    private getDepartreData(){
      this.homeService.getDepartureData().subscribe( (result) => {
        this.departureDropdownData = result;
      })
    }

    private getArrivalData(){
      this.homeService.getArrivalData().subscribe( (result) => { 
        this.arrivalDropdownData = result;
      })
    }
    /*  */

    ngOnInit(): void {
      /* initialising dropdown data */
      this.getArrivalData();
      this.getDepartreData();

    }
  }
