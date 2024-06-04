import { Typography, Stack, FormControl, FormLabel, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import SongsService from "../services/SongsService";
import { usePub } from "../hooks/pubSubHook";

type Props = { artistId: number }

const NewSong = ({ artistId }: Props) => {

    const { register, handleSubmit } = useForm();

    const publish = usePub();

    const onSubmit = async (data: any) => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('album', data.album);
        formData.append('genre', data.genre);
        formData.append('coverImg', data.coverImg);
        formData.append('releaseDate', data.releaseDate);
        formData.append('song', data.song[0]);
        formData.append('artistId', artistId.toString());

        const response = await new SongsService().create(formData);
        console.log(response);

        publish('song_created', data);
    }

    return <div>
        <Typography variant="h3" gutterBottom>
            Nueva canción
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='title'>Title</FormLabel>
                    <TextField margin="dense" id='title' fullWidth size="small" {...register('title')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='album'>Álbum</FormLabel>
                    <TextField margin="dense" id='album' fullWidth size="small" {...register('album')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='genre'>Género</FormLabel>
                    <TextField margin="dense" id='genre' type="text" fullWidth size="small" {...register('genre')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='coverImg'>Imagen</FormLabel>
                    <TextField margin="dense" id='coverImg' type="text" fullWidth size="small" {...register('coverImg')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='releaseDate'>Fecha de publicación</FormLabel>
                    <TextField type="date" margin="dense" id='releaseDate' fullWidth size="small" {...register('releaseDate')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='song'>Canción</FormLabel>
                    <TextField type="file" margin="dense" id='song' fullWidth size="small" {...register('song')}></TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type='submit'>
                Submit
            </Button>
        </form>
    </div>;
}

export default NewSong;