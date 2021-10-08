import React, { useState } from 'react'
import data from '../data/jobz.json'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import NewCard from '../components/card'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@mui/material/Button';

const DashboardRoute = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [jobs] = React.useState(data.hits.hits)
    const [filteredJobs, setFilteredJobs] = React.useState([])

    const handleChangeTerm = event => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const handleChangeLocation = event => {
        setSearchLocation(event.target.value.toLowerCase())
    }

    const handleButtonClick1 = () => {
        //filter by tag
        let filteredJobs = []
        filteredJobs = jobs.filter((fjobs) => {
            if (fjobs._source.tags) {
                for (let i = 0; i < fjobs._source.tags.length; i++) {
                    if (fjobs._source.tags[i].includes('java')) {
                        return fjobs
                    }
                }
            }
        })
        setFilteredJobs(filteredJobs)
    }
    const handleButtonClick2 = () => {
        //filter by tag
        let filteredJobs = []
        filteredJobs = jobs.filter((fjobs) => {
            if (fjobs._source.tags) {
                for (let i = 0; i < fjobs._source.tags.length; i++) {
                    if (fjobs._source.tags[i].includes('python')) {
                        return fjobs
                    }
                }
            }
        })
        setFilteredJobs(filteredJobs)
    }
    const handleButtonClick3 = () => {
        //filter by tag
        let filteredJobs = []
        filteredJobs = jobs.filter((fjobs) => {
            if (fjobs._source.tags) {
                for (let i = 0; i < fjobs._source.tags.length; i++) {
                    if (fjobs._source.tags[i].includes('kubernetes')) {
                        return fjobs
                    }
                }
            }
        })
        setFilteredJobs(filteredJobs)
    }

    const handleSubmit = event => {
        event.preventDefault()
        let filteredJobs = []
        filteredJobs = jobs.filter((fjobs) => {
            return fjobs._source.position_name.toLowerCase().includes(searchTerm)
        })
        if (searchLocation.length > 0) {
            filteredJobs = jobs.filter((fjobs) => {
                if (fjobs._source.location) {
                    if (fjobs._source.position_name.toLowerCase().includes(searchTerm) && fjobs._source.location.toLowerCase().includes(searchLocation)) {
                        return fjobs
                    }
                }
            })
        }
        setFilteredJobs(filteredJobs)
    }


    const filteredbycompany = filteredJobs.map((res, index) => {
        return <Card
            style={{ margin: 15 }}
            key={index}
        >
            <CardHeader
                title={res._source.position_name}
            />
        </Card>
    })


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
                <Item>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>About Us</Item>
            </Grid>
        </Grid>
        <Grid
            style={{ margin: 50 }}
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12}>
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
                        value={searchTerm}
                        onChange={handleChangeTerm}
                        id="term"
                        label="Job Title"
                        variant="outlined"
                        name='term'
                    />

                    <TextField
                        value={searchLocation}
                        onChange={handleChangeLocation}
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

            <Grid item xs={4}>
                <Button
                    size="large"
                    variant="contained"
                    onClick={handleButtonClick1}
                >Java</Button>
            </Grid>
            <Grid item xs={3}>
                <Button 
                size="large"
                variant="contained"
                onClick={handleButtonClick2}
                >Python</Button>
            </Grid>
            <Grid item xs={3}>
                <Button 
                size="large" 
                variant="contained"
                onClick={handleButtonClick3}
                >Kubernetes</Button>
            </Grid>
            {/* </Grid>
        <Grid> */}
            <Grid container spacing={2}>
                <Grid
                    item xs={6}
                >
                    {filteredbycompany}
                </Grid>
            </Grid>
        </Grid>

    </div>

}

export default DashboardRoute