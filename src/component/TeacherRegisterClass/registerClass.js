import { Grid, Paper, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button, Container } from '@mui/material';
import { Box, color } from '@mui/system';
import React from 'react';
import './registerClass.css';
const RegisterClass = () => {
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.05)', 
   };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Grid>
       
            <Paper elevation={10}>Nav Bar</Paper>

            <Paper elevation={10} className="paper2">
                <h2>What Do You Want to Learn ?</h2>
            
                <Grid style={styles}>
                    <h3> Register for class</h3>
                    <FormControl sx={{ minWidth: 160 }}>
                        <InputLabel id="demo-simple-select-helper-label" >Grade</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Grade"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Grade 9</MenuItem>
                            <MenuItem value={20}>Grade 10</MenuItem>
                            <MenuItem value={30}>Grade 11</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ m: 1 }} />
                    <FormControl  sx={{  minWidth: 260 }}>
                        <InputLabel id="demo-simple-select-helper-label" >Subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Subject"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Mathematics</MenuItem>
                            <MenuItem value={20}>Science</MenuItem>
                            <MenuItem value={30}>English</MenuItem>
                        </Select>
                    </FormControl>
    
                    <Box sx={{ m: 0.5 }} />
                    <Button type="submit" color="primary" variant="contained"  >Register</Button>

                </Grid>
                <Box sx={{ m: 0.5 }} />
                <Grid style={styles}>
                    <h3>My classes</h3>
                    <FormControl sx={{minWidth: 260 }}>
                        <InputLabel id="demo-simple-select-helper-label" >My Class</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="My Class"
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
                    <Box sx={{ m: 0.5 }} />
                    <Button type="submit" color="primary" variant="contained"  >View All</Button>

                </Grid>
            </Paper>

        </Grid>
    )
}

export default RegisterClass;
