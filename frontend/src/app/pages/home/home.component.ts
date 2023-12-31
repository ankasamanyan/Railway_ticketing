import { Component, Injectable, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { HomeService } from '../../home.service';


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
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: 
  [
    HomeService
  ]
})

export class HomeComponent implements OnInit {
  
    public dropdownData: any[] = [];

    constructor(private homeService: HomeService){}

    private getArrival(){
      this.homeService.getArrival().subscribe( (result) => { 
        this.dropdownData = result;
      })
    }

    ngOnInit(): void {
      this.getArrival();
    }
  }
