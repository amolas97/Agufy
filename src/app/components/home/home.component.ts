import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor( private spotify:SpotifyService ) {

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
        this.newReleases = data;
      })

  }



  ngOnInit(): void {
  }

}
