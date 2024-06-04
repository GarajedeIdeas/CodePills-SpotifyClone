import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'artist-detail/:artistId',
    loadComponent: () => import('./artist-detail/artist-detail.page').then(m => m.ArtistDetailPage)
  },
];
