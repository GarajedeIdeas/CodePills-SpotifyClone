import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import Song from "../models/Song";

import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import ReactAudioPlayer from "react-audio-player";
import SongsService from "../services/SongsService";
import { usePub } from "../hooks/pubSubHook";

type Props = { songs: Song[] };

const SongList = ({ songs }: Props) => {

    const publish = usePub();

    const onClickDelete = async (id: number) => {
        const response = await new SongsService().deleteById(id);
        console.log(response);
        publish('song_deleted', id);
    }

    return <div>
        <Typography variant="h3">
            Canciones
        </Typography>
        <List>
            {songs.map(song => (
                <div key={song.id}>
                    <ListItem secondaryAction={
                        <button onClick={() => onClickDelete(song.id)}>Borrar</button>
                    }>
                        <ListItemIcon>
                            <LibraryMusicIcon></LibraryMusicIcon>
                        </ListItemIcon>
                        <ListItemText primary={song.title} secondary={song.album}></ListItemText>
                    </ListItem>
                    <ReactAudioPlayer
                        src={song.cloudinarySecureUrl}
                        autoPlay={false}
                        controls
                        style={{ width: '100%' }}
                    ></ReactAudioPlayer>
                </div>
            ))}
        </List>
    </div>;
}

export default SongList;