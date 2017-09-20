import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class HomeService {
    private moviename = 'batman';
    constructor(private _http: Http) { }

    getMovie(query: string) {
        console.log('moviename:-' + query);
        return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US&page=1&include_adult=false&query=' + query)
            .map(res => res.json());
    }

    updatemoviename(moviename: string) {
        this.moviename = moviename;
    }
}