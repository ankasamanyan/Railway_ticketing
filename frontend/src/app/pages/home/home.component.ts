import { Component, Injectable } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { get } from 'http';
import { Console } from 'console';
import { NgFor } from '@angular/common';

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
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  private backendUrl = 'http://localhost:3000'
  public dropdownData: any[] = [];
  
  async getDropdownData(){
    console.log("allo");
      let response =  await fetch (`${this.backendUrl}/station/arrival`,
      {
        method: "Get",
      });
      let data = await response.json();
      this.dropdownData.push(data);
      console.log(this.dropdownData);

    }
  }
