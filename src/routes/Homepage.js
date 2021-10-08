import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { CardContent, CardHeader } from '@mui/material'
import Card from '@material-ui/core/Card'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CardMedia from '@mui/material/CardMedia'

import image from '../img/img.jpg'
import image1 from '../img/img1.jpg'

const Homepage = (props) => {



    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const handleSubmit = event => {
        event.preventDefault()
        props.history.push('/jobs')
    }

   

    return <div>
        <Grid
            container
            spacing={2}>
            <Grid 
            item xs={8}>
                <Item>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item 
                onClick={handleSubmit}
                >Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>About Us</Item>
            </Grid>
        </Grid>
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            style={{ margin: 5 }}
        >
            <Grid item xs={12}>
                <Card
                >
                    <CardHeader
                        style={{ textAlign: 'center' }}
                        title={'We connect you to Cassandra Jobs'} />
                </Card>
            </Grid>
        </Grid>
        <Grid container>
            <Grid
                style={{ margin: 50 }}
                item xs={12}>
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

                    <TextField
                        // value={searchTerm}
                        // onChange={handleChangeTerm}
                        id="term"
                        label="Job Title"
                        variant="outlined"
                        name='term'
                    />

                    <TextField
                        // value={searchLocation}
                        // onChange={handleChangeLocation}
                        id="location"
                        label="Location"
                        variant="outlined"
                        name='location' />

                    <button
                        style={{ visibility: "hidden" }}
                        type="submit"
                    ></button>
                </Box>
            </Grid>
            <Grid
                style={{ margin: 0 }}
                item xs={6}
            >
                <Card
                style={{ margin: 150 }}
                >
                    <CardHeader
                        style={{ textAlign: 'center' }}
                        title={'Cassandra Link'} />
                    <CardContent>
                        <CardMedia
                            component="img"
                            image={image1}
                            alt=""
                        />
                        
                    </CardContent>
                </Card>
            </Grid>
            <Grid
                
                item xs={6}
            >
                <Card
                style={{ margin: 150 }}
                >
                    <CardHeader
                        style={{ textAlign: 'center' }}
                        title={'Cassandra Tools'} />
                    <CardContent>
                        <CardMedia
                            component="img"
                            image={image}
                            alt=""
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </div>
}

export default Homepage