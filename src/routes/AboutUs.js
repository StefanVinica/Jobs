import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { CardContent, CardHeader, Typography } from '@mui/material'
import { ListItemText } from '@mui/material';
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
        fontFamily: 'Poppins,sans-serif!important',
        color: '#000',
        fontWeight: 500,
        fontSize: '1.4rem',
        textDecoration: 'none'
    }));

    return <div>

        <Grid
            container
            spacing={2}>
            <Grid item xs={8}>
                <Item onClick={event => { props.history.push('/') }}>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item onClick={event => { props.history.push('/jobs') }}>Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item >About Us</Item>
            </Grid>
        </Grid>
        <Grid
             style={{ margin: 50 }}
            container
            spacing={2}>
            <Grid item xs={12}>
            <Typography variant='subtitle1'>
                Welcome to Cassandra.Jobs, a curated job board dedicated solely to Cassandra to help Apache Cassandra developers, administrators, and architects find their dream job.
            </Typography>
            <Typography variant='subtitle1'>
                Apache Cassandra is one of the most forward looking Databases in the world. It is designed for now and the future. Our goal is to connect Cassandra professionals with potential opportunities using a technology that is continuing to gain traction with enterprises who need real-time, resilient, scalable platforms.
            </Typography>
              
                Team
                <ListItemText>
                Editor: Rahul Singh
                </ListItemText>
                <ListItemText>
                Project Manager: Danielle Crispino
                </ListItemText>
                <ListItemText>
                Interface: Stefan Nikolovski, Max Logan
                </ListItemText>
                <ListItemText>
                Software: Ryan Quey, Arpan Patel
                </ListItemText>
                <ListItemText>
                Database: Rahul Singh, Jagannath Bilgi, Ryan Quey
                </ListItemText>
                <ListItemText>
                Systems: Jagannath Bilgi, Rahul Singh, Ryan Quey
                </ListItemText>
            
            </Grid>
        </Grid>
    </div>
}

export default AboutUs