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
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardContent } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ButtonBase from '@material-ui/core/ButtonBase';
import { margin } from '@mui/system'

const DashboardRoute = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [jobs] = React.useState(data.hits.hits)
    const [filteredJobs, setFilteredJobs] = React.useState([])
    const [selected, setSelected] = React.useState(0)
    const [visible, setVisible] = React.useState('hidden')
    const [hover, setHover] = React.useState(-1)

    const handleChangeTerm = event => {
        setSearchTerm(event.target.value)
    }

    const handleChangeLocation = event => {
        setSearchLocation(event.target.value)
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
        setVisible('visible')
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
        setVisible('visible')
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
        setVisible('visible')
    }

    const format = date => {
        let now = new Date(date)
        return now
    }

    const handleSubmit = event => {
        event.preventDefault()
        let filteredJobs = []
        setVisible('visible')
        filteredJobs = jobs.filter((fjobs) => {
            return fjobs._source.position_name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        if (searchLocation.length > 0) {
            filteredJobs = jobs.filter((fjobs) => {
                if (fjobs._source.location) {
                    if (fjobs._source.position_name.toLowerCase().includes(searchTerm) || fjobs._source.location.toLowerCase().includes(searchLocation.toLowerCase())) {
                        return fjobs
                    }
                }
            })
        }
        if (searchTerm.length === 0) {
            filteredJobs = jobs.filter((fjobs) => {
                if (fjobs._source.location) {
                    return fjobs._source.location.toLowerCase().includes(searchLocation.toLowerCase())
                }
            })
        }
        setFilteredJobs(filteredJobs)
    }





    const filteredbycompany = filteredJobs.map((res, index) => {
        return <Card
            style={
                hover === index ? { boxShadow:'-1px 10px 29px 0px rgba(0,0,0,0.8)', margin: 15} : { backgroundColor: 'white', color: '#1976D2', margin: 15, }
            }
            key={index}
            onClick={event => { setSelected(index) }}
            onMouseOver={event => { setHover(index) }}
            onMouseLeave={event => { setHover(-1) }}
        >

            <CardHeader
                title={res._source.position_name}
            />
            <CardContent>
                <Typography variant="h6" color="#D84315">
                    {res._source.company_name}
                </Typography>
                <Typography variant="body1" color="#F4511E">
                    Source: {res._source.external_api_name}
                </Typography>
                <Typography variant="caption" color='black'>
                    Date: {res._source.updated_at}
                </Typography>
            </CardContent>

        </Card>
    })

    const summary = (num) => {
        if (num == 0) {
            if (filteredJobs.length > 0) {
                return filteredJobs[selected]._source.company_name
            }
            else return ''
        }
        if (num == 1) {
            if (filteredJobs.length > 0) {
                return filteredJobs[selected]._source.position_name
            }
            else return ''
        }
        if (num == 2) {
            if (filteredJobs.length > 0) {
                return filteredJobs[selected]._source.description
            }
            else return ''
        }
    }


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
                <Item onClick={event => { props.history.push('/') }}>Cassandra.jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>Jobs</Item>
            </Grid>
            <Grid item xs={2}>
                <Item onClick={event => { props.history.push('/aboutus') }}>About Us</Item>
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
                <Grid
                    item xs={5}
                >
                    <Card style={{
                        margin: 15,
                        visibility: visible
                    }}>
                        <CardHeader
                            title={'Summary'}
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }}
                                color="#D84315"
                                gutterBottom>
                                {`Company Name: ${summary(0)}`}
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="grey" gutterBottom>
                                {`Position Name: ${summary(1)}`}
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={{
                        margin: 15,
                        visibility: visible
                    }}>
                        <CardHeader
                            title={'Description'}
                        />
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="grey" gutterBottom>
                                {summary(2)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>

        {/* <Pagination 
        count={10} 
        color="primary"
        size="large"
        /> */}


    </div>

}

export default DashboardRoute