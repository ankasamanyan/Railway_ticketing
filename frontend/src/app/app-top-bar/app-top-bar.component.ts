import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule, 
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.css'
})
export class AppTopBarComponent {

}
