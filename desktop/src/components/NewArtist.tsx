import { Stack, FormControl, FormLabel, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import ArtistsService from "../services/ArtistsService";
import { usePub } from "../hooks/pubSubHook";

const NewArtist = () => {

    const { register, handleSubmit, reset } = useForm();
    const publish = usePub();

    const onSubmit = async (data: any) => {
        const response = await new ArtistsService().create(data);
        console.log(response);
        publish('artist_created', data);
        reset();
    }

    return <div>
        <h2>New Artist</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <TextField margin="dense" id='name' placeholder='name' fullWidth size="small" {...register('name')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='bio'>Bio</FormLabel>
                    <TextField margin="dense" id='bio' placeholder='bio' fullWidth size="small" {...register('bio')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='genre'>Genre</FormLabel>
                    <TextField margin="dense" id='genre' type="text" fullWidth size="small" placeholder='genre' {...register('genre')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='coverImg'>Cover Img</FormLabel>
                    <TextField margin="dense" id='coverImg' type="text" fullWidth size="small" placeholder='coverImg' {...register('coverImg')}></TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type='submit'>
                Submit
            </Button>
        </form>
    </div>
}

export default NewArtist;