import {FormControlLabel,Checkbox,Button, FormControl,InputLabel,Select,MenuItem, Grid, Paper,TextField,InputAdornment} from '@mui/material'
import { Box, spacing } from '@mui/system';
import React from 'react'
import './studentProfile.css'

const StudentProfile = () => {
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
        <Paper elevation={10} className="p1">
              <h3 className="myProHead">My Profile</h3>
        </Paper>
        <Paper elevation={10} className="p2">
              <Grid>
              <TextField
                        label="Name"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '36ch' }}
                      
                    />
                            <TextField
                        label="Grade/s"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '36ch' }}
                      
                    />
                                  <TextField
                        label="User ID"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '36ch' }}
                      
                    />
                    <FormControl sx={{m:1,width: '36ch' }}>
                        <InputLabel id="demo-simple-select-helper-label" >Subject's</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={age}
                            label="Subject's"
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
                        label="Qualifications"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '74ch' }}
                      
                    />
                                        <TextField
                        label="Years of Experience"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '36ch' }}
                      
                    />
                                        <TextField
                        label="Email"
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '36ch' }}
                      
                    />
                                                            <TextField
                        label="Contact No."
                        size="small"
                        id="outlined-start-adornment"
                        sx={{ m:1, width: '74ch' }}
                      
                    />
                      <FormControlLabel sx={{ m:0 }}
                       control={<Checkbox defaultChecked />} label="I read and agree to Terms & Conditions" />
         <Box sx={{ m: 0.5 }} />
         
                    <Button sx={{ m:1 }}  type="submit" color="primary" variant="contained" >Edit</Button>
 &nbsp; &nbsp;
                    <Button sx={{ display: 'inline' }} type="submit" color="primary" variant="contained" >Save</Button>
              </Grid>
        </Paper>
        </Grid>
    )
}

export default StudentProfile
