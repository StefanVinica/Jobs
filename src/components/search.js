import React from "react";
import ReactDOM from "react-dom";
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
// import { styled } from '@mui/material/styles'


const Search = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchLocation, setSearchLocation] = React.useState("");

  const handleChangeTerm = event => {
    setSearchTerm(event.target.value)
  }

  const handleChangeLocation = event => {
    setSearchLocation(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  
    return (
        <Box
            action="/"
            method="get"
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off"
            
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                    value={searchTerm} 
                    onChange={handleChangeTerm}
                    id="term" 
                    label="Job Title"
                    variant="outlined"
                    name='term'
                     />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                     value={searchLocation} 
                     onChange={handleChangeLocation}
                     id="location" 
                     label="Location" 
                     variant="outlined" 
                     name='location'/>
                </Grid>
            </Grid>
            <button
            style={{visibility: "hidden"}}
            type="submit"
            ></button>
        </Box>
    )
}

export default Search