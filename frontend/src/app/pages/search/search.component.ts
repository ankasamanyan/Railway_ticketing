import { Component, Injectable, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../../services/home.service';
import { NgFor } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';



@Component({
  selector: 'app-search',
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
    MatDatepickerModule,
    MatRadioModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: 
  [
    HomeService,
  ]
})
export class SearchComponent {
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

  public search(){
    console.log("Halp");
  }

  ngOnInit(): void {
    /* initialising dropdown data */
    this.getArrivalData();
    this.getDepartreData();

  }
}
