import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, Injectable, OnInit } from '@angular/core';

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
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule
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
    public arrivalDropdownData:   any[] = [];

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

    ngOnInit(): void {
      /* initialising dropdown data */
      this.getArrivalData();
      this.getDepartreData();

    }
  }
