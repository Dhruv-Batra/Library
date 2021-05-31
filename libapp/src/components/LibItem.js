import {Typography,Grid,Card, CardContent, CardActions, makeStyles, Button} from '@material-ui/core'
import { useEffect } from 'react';
import Remover from './Remover'

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

export default function LibItem({bookList,setLibList2}){

    const classes = useStyles();

    return(
        <Grid 
            container
            alignItems="center"
            justify="flex-start"
        >
            {(bookList.length>0) ? (bookList.map((item) => 
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
                    <Remover
                        docid={item.id}
                        setLibList2={setLibList2}
                    />
                    <br></br>
                </div>
            )):<Grid container alignItems="center" justify="center"><p>Add books using the Search page to see them in your library!</p></Grid>}
        </Grid>
    )
}