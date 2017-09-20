import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
    selector: 'app-mov',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HomeService],
})
export class HomeComponent {
    movies: any[];
    moviename: string;

    constructor(private _homeservice: HomeService) { }

    search() {
        this._homeservice.getMovie(this.moviename).subscribe(
            response => this.movies = response.results);
    }
}