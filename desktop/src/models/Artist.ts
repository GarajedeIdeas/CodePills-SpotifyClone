import Song from "./Song";

export default interface Artist {
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