import React, { useState } from 'react'
import data from '../data/jobss'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import NewCard from '../components/card'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

const DashboardRoute = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [jobs] = React.useState(data.hits.hits)
    const [filteredJobs, setFilteredJobs] = React.useState([])

    const handleChangeTerm = event => {
        setSearchTerm(event.target.value)
    }

    const handleChangeLocation = event => {
        setSearchLocation(event.target.value)
    }


    const handleSubmit = event => {
        event.preventDefault()
        let filteredJobs = []
        filteredJobs = jobs.filter((fjobs) => {
            return fjobs._source.company_name === searchTerm
        })
        setFilteredJobs(filteredJobs)
        
    }

    const filtered = () => {
        let cards
        for (let i = 0; i < filteredJobs.length; i++) {
            cards = <Card>
                <CardHeader
                title={filteredJobs[i]._source.position_name}
                />
            </Card>
        }
        return cards
    }


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    // const jobs = this.state.jobs
    return <div>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Item>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>About Us</Item>
            </Grid>
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
                            name='location' />
                    </Grid>
                </Grid>
                <button
                    style={{ visibility: "hidden" }}
                    type="submit"
                ></button>
            </Box>
        </Grid>
        <Grid container>
            <Grid item xs={3}>
                <NewCard />
            </Grid>
            <Grid item xs={3}>
                <NewCard />
            </Grid>
            <Grid item xs={3}>
                <NewCard />
            </Grid>


            <Grid item xs={6}>

            </Grid>
        </Grid>
        <Grid>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <NewCard />
                </Grid>
                <Grid item xs={8}>
                    <NewCard />
                </Grid>
                {filtered()}
            </Grid>
        </Grid>

    </div>

}

export default DashboardRoute