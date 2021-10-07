import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
// import { styled } from '@mui/material/styles'



export default function Search() {
    // const Item = styled(Paper)(({ theme }) => ({
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    // const search = (props) => {
    //     const {classes} = props;
    //         const [term, setTerm] = useState('');
    //         const [location, setLocation] = useState('');
    
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log( 'Term:', term, 'Location: ', location); 
    // }
    // }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '100ch' },
            }}
            noValidate
            autoComplete="off"
            
        >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField 
                    // value={term} 
                    // onInput={ e=>setTerm(e.target.value)}
                    id="term" 
                    label="Job Title"
                    variant="outlined"
                    name='term' />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    //  value={location} 
                    //  onInput={ e=>setLocation(e.target.value)}
                     id="outlined-basic" 
                     label="Location" 
                     variant="outlined" />
                </Grid>
            </Grid>
        </Box>
    )
}