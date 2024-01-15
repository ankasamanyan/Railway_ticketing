import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { HomeService } from '../../services/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';


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
    MatRadioModule,
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
  public selectedDeparture: string = '';
  public selectedArrival: string = '';
  public ticketData: any[] = [];

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

  private getTicketData(){
    this.homeService.getTicketData(this.selectedDeparture, this.selectedArrival).subscribe( (result) => {
      this.ticketData = result;
    })
  }

  public search(){

    console.log(this.selectedDeparture);
    console.log(this.selectedArrival);

    this.getTicketData();
  }

  ngOnInit(): void {
    /* initialising dropdown data */
    this.getArrivalData();
    this.getDepartreData();

  }
}
