import Song from "./song.interface";

export interface Artist {
    id: number;
    name: string;
    bio: string;
    genre: string;
    coverImg: string;
    createdAt: string;
    updatedAt: string;
    userId: number;
    songs: Song[];
}