import {FormControl,InputLabel,Select,MenuItem, TextField, InputAdornment, Grid, Paper, Button } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import './studentRegClass.css'
const StudentRegClass = () => {
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
        <Paper elevation={10}> nave Bar</Paper>
            <Paper elevation={10} className='p1'>
                <h3 className="mainHead">Grade 10 - Mathematics</h3>
            </Paper>
            <Paper elevation={10} className="p2">

                <TextField
                    label="Select Grade"
                    size="small"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '75ch', height: '5ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="">10</InputAdornment>,

                    }}
                />
                <TextField
                    label="Select Subject"
                    size="small"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '75ch', height: '5ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="">Mathematics</InputAdornment>,

                    }}
                />
                <FormControl sx={{m:1,width: '75ch' }}>
                        <InputLabel id="demo-simple-select-helper-label" >Select Tutor</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Select Tutor"
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
                    </FormControl>
                <TextField
                    label="Class ID"
                    size="small"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '75ch', height: '5ch' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="">MAT10KMR</InputAdornment>,

                    }}
                />

                <TextField
                    label="Day/Days"
                    size="small"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '75ch'}}
                    InputProps={{
                        startAdornment: <InputAdornment position="">Monday</InputAdornment>,

                    }}
                />

                <TextField
                    label="Time"
                    size="small"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '75ch'}}
                    InputProps={{
                        startAdornment: <InputAdornment position="">04:00pm - 06:00pm</InputAdornment>,

                    }}
                />

<Box sx={{ m: 0.5 }} />
         
         <Button sx={{ m:1 }}  type="submit" color="primary" variant="contained" >Register</Button>


            </Paper>
        </Grid>
    )
}

export default StudentRegClass
