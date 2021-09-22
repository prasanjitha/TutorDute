import { Avatar, FormControl, Grid, Paper, TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, handleMouseDownPassword, Checkbox, FormControlLabel, Button, Typography, Link } from "@mui/material";
import React from "react";
import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './register.css';
import { Box, color } from "@mui/system";
const Register = () => {
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
        <div className="register">

            <Grid>
                <Paper elevation={10} className="paper1" >
                    <Grid align="center">
                        <Avatar className="avaterStyle"><AddReactionOutlinedIcon /></Avatar>
                        <h2>  Sign In</h2>
                    </Grid>
                    <TextField id="username" label="username" type="username" fullWidth />
                    <Box sx={{ m: 2 }} />
                    <TextField id="Email" label="email" type="email" fullWidth />
                    <Box sx={{ m: 2 }} />

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
                    <Box sx={{ m: 1 }} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I read and agree to Terms & Conditions" />
                    <Button type="submit" color="primary" variant="contained" fullWidth onClick={datasub}>Sign UP as teacher</Button>
                    <Box sx={{ m: 0.5 }} />
                    <Button type="submit" color="success" variant="contained" fullWidth onClick={datasub}>Sign UP as student</Button>
                  
                   
                </Paper>
            </Grid>
        </div>
    )
    function datasub(){
        var username=document.getElementById("username").value;
        var email =document.getElementById("Email").value;
        window.alert("Welcome to TutorDute" );
        window.alert("Details"+" "+username+" "+email);
    }
}
export default Register;