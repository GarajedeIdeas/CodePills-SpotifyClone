import { Grid } from "@mui/material";
import ArtistList from "../components/ArtistList";
import NewArtist from "../components/NewArtist";

const Home = () => {
    return <Grid container spacing={2}>
        <Grid item xs={6}>
            <h2>Artist List</h2>
            <ArtistList />
        </Grid>
        <Grid item xs={6}>
            <NewArtist />
        </Grid>
    </Grid>
}

export default Home;