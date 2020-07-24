import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('spotifyService listo!')
  }

  getQuery(query: string){
    
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCFFPkOpi-3zkMCZKsfOWa5vOMyx9kuOOY_a3wuAof9zYbCt2Rr1y6PzLWUo1MgDqyx_3wVGErHLe-_Tyg'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map(data => data['albums'].items))
  }

  getArtista(termino:string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map(data => data['artists'].items))
  }

}
