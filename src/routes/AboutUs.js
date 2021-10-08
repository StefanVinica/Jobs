import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { CardContent, CardHeader } from '@mui/material'
import Card from '@material-ui/core/Card'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CardMedia from '@mui/material/CardMedia'

const AboutUs = (props) => {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return <div>
        
        <Grid
            container
            spacing={2}>
            <Grid item xs={8}>
                <Item onClick={event => {props.history.push('/')}}>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item onClick={event => {props.history.push('/jobs')}}>Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item >About Us</Item>
            </Grid>
        </Grid>
    </div>  
}

export default AboutUs