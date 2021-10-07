import React, { Component } from 'react'
import data from '../data/jobss'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Search from '../components/search'
import NewCard from '../components/card'

export default class DashboardRoute extends Component {


    state = {
        jobs: [],
        term: '',
        location: ''
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.setState({
            jobs: data.hits.hits,
        })

    }


    render() {

        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        if (this.state != null) {
            const jobs = this.state.jobs
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
                    <Grid item xs={12}>
                        <Item> <h1>We connect you to cassandra Jobs</h1> </Item>
                    </Grid>
                    <Search />
                
                    <Grid item xs={4}>
                        <NewCard />
                    </Grid>
                    <Grid item xs={4}>
                        <NewCard />
                    </Grid>
                    <Grid item xs={4}>
                        <NewCard />
                    </Grid>

                    <Grid item xs={4}>
                        <NewCard />
                        <NewCard />
                        <NewCard />
                        <NewCard />
                    </Grid>
                    <Grid item xs={6}>
                        
                    </Grid>

                </Grid>

            </div>
        }
        else {
            return <div>Nothing</div>
        }
    }
}