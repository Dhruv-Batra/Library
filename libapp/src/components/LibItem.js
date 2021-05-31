import {Typography,Grid,Card, CardContent, CardActions, makeStyles, Button} from '@material-ui/core'
import { useEffect } from 'react';

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

export default function LibItem({bookList}){

    const classes = useStyles();

    useEffect(()=>{
        console.log(bookList)
    })

    return(
        <Grid 
            container
            alignItems="center"
            justify="center"
        >
            {bookList.map((item) => 
                <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography 
                                variant="h5"
                                gutterBottom
                            >
                                {item.title}
                            </Typography >
                            {item.authors.map((person)=>
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
                    <br></br>
                </div>
            )}
        </Grid>
    )
}