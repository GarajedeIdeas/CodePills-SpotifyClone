import { useEffect, useState } from "react";
import Artist from "../models/Artist";
import { useParams } from "react-router-dom";
import ArtistsService from "../services/ArtistsService";
import { Divider, Grid, Typography } from "@mui/material";
import SongList from "../components/SongList";
import NewSong from "../components/NewSong";
import { useSub } from "../hooks/pubSubHook";

const ArtistDetail = () => {

    const [artist, setArtist] = useState<Artist | null>(null);

    const params = useParams();

    const fetchData = async () => {
        try {
            const response = await new ArtistsService().getById(params.artistId!)
            console.log(response.data);
            setArtist(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useSub('song_created', fetchData);
    useSub('song_deleted', fetchData);

    return <div>
        {artist &&
            <>
                <Typography variant="h2">
                    {artist.name}
                </Typography>
                <Typography paragraph={true}>Género: {artist.genre}</Typography>
                <Divider sx={{ margin: '40px 0' }} />
                <Typography paragraph={true}>
                    {artist.bio}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <SongList songs={artist.songs} />
                    </Grid>
                    <Grid item xs={6}>
                        <NewSong artistId={artist.id} />
                    </Grid>
                </Grid>
            </>
        }
    </div>
}

export default ArtistDetail;