import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('spotifyService listo!')
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCwZMN9IfHDa4iBiAl-DHlD8AzzBri9XK7JxQV-82t6C4rs-9Mj2NY5WQBcclCjwpUFsfZUvMNoGxrVi_U'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe(data =>{
        console.log(data);
      })

  }
}
