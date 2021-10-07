import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import { ThemeProvider } from '@material-ui/styles'
import {
    makeStyles,
    createStyles,
    Theme,
    withStyles
} from '@material-ui/core/styles'




export default function NewCard() {
    const classes = makeStyles((theme) =>
    createStyles({
        root: {
            minWidth: 100,
            height: '100%',
            borderBottom: '2px solid #f1f1f1',
            borderRight: '2px solid #f1f1f1',
            borderLeft: '2px solid #f1f1f1'
          },
          mainCard: {
            borderBottom: '2px solid #B0B0B0',
            borderRight: '2px solid #B0B0B0',
            borderLeft: '2px solid #B0B0B0',
            borderTop: '1px solid #B0B0B0'
          },
          media: {
            height: 0,
            paddingTop: '56.25%'
          },
          expand: {
            transform: 'rotate(0deg)',
            marginRight: 'auto',
            transition: theme.transitions.create('transform', {
              duration: theme.transitions.duration.shortest
            })
          },
          expandOpen: {
            transform: 'rotate(180deg)'
          },
          cardHeader: {
            display: 'flex',    
            justifyContent: 'space-between',
            flexDirection: 'row-reverse',    
            textAlign: 'left',
            borderWidth: 'thick'
          },
          checkBox: {
            order: 3,
            alignSelf: 'center',
            marginRight: '10px'
          },
          avatarPosition: {
            order: 1
          },
          entityType: {
            marginRight: 30,
            textTransform: 'capitalize',
            fontSize: 12,
            textDecoration: 'none',
            fontWeight: 100
          },
          divider: {
            marginBottom: 15,
            borderTop: '1px solid #f1f1f1'
          },
          chipContainer: {
            textAlign: 'left',
            paddingLeft: 15
          },
          hidden: {
            display: 'none'
          },
          highlight: {
            backgroundColor: '#FFFF00'
          },
          greenBackground: {
            backgroundColor: '#388e3c',
            color: 'white'
          },
          blueBackground: {
            backgroundColor: '#115293',
            color: 'white'
          }
    })
)

    return (
        <Card>
            <CardHeader
                title={'Tag/Category'}
            />  
        </Card>
    )
}