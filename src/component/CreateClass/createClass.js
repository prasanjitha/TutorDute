import { TextField, Grid, Paper, FormControl,InputLabel,Select,MenuItem, OutlinedInput, InputAdornment, FormHelperText, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './createClass.css';
const CreateClass = () => {
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)', 
   };
    const [age, setAge] = React.useState('');

    return (
        <Grid>
        <Paper elevation={10}>Nav Bar</Paper>
            <Paper elevation={10} className="paper3">
                <h2 className="mainHead" >Grade 10-Mathematics</h2>
            </Paper>
            <Paper elevation={10} className="paper4">
                <Grid>
                    <h3>Create Class</h3>

                    <TextField
                        label="Select Grade"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '25ch',height:'5ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="">10</InputAdornment>,

                        }}
                    />
                            <TextField
                        label="Select Subject"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="">Mathematics</InputAdornment>,

                        }}
                    />
                    <TextField
                        size="small"
                        label="Class ID"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '25ch',height:'5ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="">MAT10KMR</InputAdornment>,

                        }}
                    />
                            <TextField
                        size="small"
                        label="Tutor Name"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="">Kumara Perera</InputAdornment>,

                        }}
                    />
                    <FormControl sx={{m:1,minWidth: 450 }}>
                        <InputLabel id="demo-simple-select-helper-label" >My Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="My Class"
                            size="small"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>mathamatics</MenuItem>
                            <MenuItem value={20}>science</MenuItem>
                            <MenuItem value={30}>english</MenuItem>
                        </Select>
                    </FormControl> <TextField 
                    size="small"
                    sx={{ m:1, width: '52ch',height:'5ch' }} fullWidth label="Time" id="fullWidth" />
                    <Box sx={{ m: 1 }} />
                    <Button sx={{m:1}} type="submit" color="primary" variant="contained"  >Confirm</Button>

                </Grid>

            </Paper>
        </Grid>
    )
}

export default CreateClass;
