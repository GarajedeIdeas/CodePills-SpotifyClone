import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtistDetailPage } from './artist-detail.page';

describe('ArtistDetailPage', () => {
  let component: ArtistDetailPage;
  let fixture: ComponentFixture<ArtistDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
