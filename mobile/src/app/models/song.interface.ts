export default interface Song {
    id: number;
    title: string;
    album: string;
    genre: string;
    releaseDate: string;
    coverImg: string;
    cloudinaryPublicId: string;
    cloudinarySecureUrl: string;
    artistId: number;
    createdAt: string;
    updatedAt: string;
}