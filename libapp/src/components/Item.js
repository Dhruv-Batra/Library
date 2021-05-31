import {Typography,Grid,Card, CardContent, CardActions, makeStyles, Button} from '@material-ui/core'
import Adder from './Adder'

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        width: '15vw',
        height: '40vh',
        background: '#64b5f6',
        borderRadius: spacing(2),
        margin: '3.75vh',
    },
    action:{
    
    },
}));

export default function Item({bookList,setBookList}){

    const classes = useStyles();

    return(
        <Grid 
            container
            alignItems="center"
            justify="flex-start"
        >
            {bookList.map((item) => 
                <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography 
                                variant="h5"
                                gutterBottom
                            >
                                {item.volumeInfo.title}
                            </Typography >
                            {item.volumeInfo.authors.map((person)=>
                                <Typography 
                                    variant="body1"
                                    gutterBottom
                                >   
                                    {person}
                                </Typography >
                                )
                            }
                        </CardContent>
                    </Card>
                    <Adder 
                        className={classes.action}
                        title={item.volumeInfo.title}
                        authors={item.volumeInfo.authors}
                        bookList={bookList}
                        setBookList={setBookList}
                    />
                    <br></br>
                </div>
            )}
        </Grid>
    )
}