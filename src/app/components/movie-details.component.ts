import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css'],
    providers: [ HomeService ]
  })
  export class MovieDetailsComponent{
    
  }