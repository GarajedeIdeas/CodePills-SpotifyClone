import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import Song from '../models/song.interface';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private baseUrl: string = 'http://localhost:3000/api/songs';

  private httpClient = inject(HttpClient);

  searchSongs(query: string) {
    return firstValueFrom(
      this.httpClient.post<Song[]>(`${this.baseUrl}/search`, { search: query })
    )
  }

}
