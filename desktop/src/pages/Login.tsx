import { Button, FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data: any) => {
        try {
            const response = await new UsersService().login(data);
            localStorage.setItem('codetunes_token', response.data.token);
            navigate('/');
        } catch (error: any) {
            console.log(error);
        }
    }

    return <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <TextField margin="dense" id='email' placeholder='email' fullWidth size="small" {...register('email')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <TextField margin="dense" id='password' type="password" fullWidth size="small" placeholder='password' {...register('password')}></TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type='submit'>
                Submit
            </Button>
        </form>
    </div>
}

export default Login;