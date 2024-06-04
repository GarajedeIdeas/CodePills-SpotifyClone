import { useEffect, useState } from "react";
import ArtistsService from "../services/ArtistsService";
import Artist from "../models/Artist";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSub } from "../hooks/pubSubHook";

const ArtistList = () => {

    const [artists, setArtists] = useState<Artist[]>([]);

    useSub('artist_created', (data: any) => {
        console.log(data);
        fetchData();
    })

    const fetchData = async () => {
        try {
            const response = await new ArtistsService().getAll();
            setArtists(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return <div>
        {artists.map(artist => (
            <Card sx={{ marginBottom: '15px' }} key={artist.id}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {artist.name}
                    </Typography>
                    <Typography variant="body2">
                        {artist.bio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/artists/${artist.id}`}>
                        <Button size="small">Ver más</Button>
                    </Link>
                </CardActions>
            </Card>
        ))}
    </div>
}

export default ArtistList;