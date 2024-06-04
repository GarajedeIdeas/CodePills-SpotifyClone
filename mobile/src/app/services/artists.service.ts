import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Artist } from '../models/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  private baseUrl: string = 'http://localhost:3000/api/artists';

  private httpClient = inject(HttpClient);

  getArtists() {
    return firstValueFrom(
      this.httpClient.get<Artist[]>(this.baseUrl)
    );
  }

  getArtist(artistId: string) {
    return firstValueFrom(
      this.httpClient.get<Artist>(`${this.baseUrl}/${artistId}`)
    );
  }

  searchArtists(query: string) {
    return firstValueFrom(
      this.httpClient.post<Artist[]>(`${this.baseUrl}/search`, { search: query })
    );
  }

}
