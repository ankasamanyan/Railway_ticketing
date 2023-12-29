import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    CommonModule,
    RouterOutlet, 
    AppTopBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '✨JustTrains✨';
}
