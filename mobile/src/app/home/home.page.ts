import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/angular/standalone';
import { ArtistsService } from '../services/artists.service';
import { Artist } from '../models/artist.interface';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import Song from '../models/song.interface';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink],
})
export class HomePage {

  artists: Artist[] = [];
  searchResult: { artists: Artist[], songs: Song[] } = { artists: [], songs: [] };

  artistsService = inject(ArtistsService);
  songsService = inject(SongsService);

  async ngOnInit() {
    const response = await this.artistsService.getArtists();
    this.artists = response;
  }

  onSearch($event: any) {
    if ($event.target.value === '' || $event.target.value.length < 3) {
      this.searchResult = { artists: [], songs: [] };
    } else {
      Promise.all([
        this.artistsService.searchArtists($event.target.value),
        this.songsService.searchSongs($event.target.value)
      ]).then(([artists, songs]) => {
        this.searchResult = { artists, songs };
        console.log(this.searchResult);
      });
    }
  }

}
