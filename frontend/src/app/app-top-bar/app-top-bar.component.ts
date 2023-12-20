import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './app-top-bar.component.html',
  styleUrl: './app-top-bar.component.css'
})
export class AppTopBarComponent {

}
