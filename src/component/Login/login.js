import { Avatar, FormControl, Grid, Paper, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, handleMouseDownPassword, Checkbox, FormControlLabel, Button, Typography, Link } from "@mui/material";
import React from "react";
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import './login.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, color } from "@mui/system";
const Login = () => {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className="login">
            <Grid>
                <Paper elevation={10} className="paper1" >
                    <Grid align="center">
                        <Avatar className="avaterStyle"><AddReactionOutlinedIcon /></Avatar>
                        <h2>  Sign In</h2>
                    </Grid>
                    <TextField id="username" label="username" type="username" fullWidth />
                    <Box sx={{ m: 4 }} />

                    <FormControl sx={{ width: '32.5ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Box sx={{ m: 4 }} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    <Button type="submit" color="primary" variant="contained" fullWidth onClick={datasub}>Sign IN</Button>
                    <Box sx={{ m: 1 }} />
                    <Typography> Don't have an account ?
                        <Link href="#">Sign IN</Link>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
    function datasub(){
        var username=document.getElementById("username").value;
        window.alert("Welcome to TutorDute" +username);
    }
}

export default Login;