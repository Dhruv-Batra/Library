import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: '4vh',
    },
});

export default function Nabar(){

    const classes = useStyles();

    return(
        <div>
            <header className="App-header"> 
            <br></br>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    justify="flex-start"
                >
                    <Grid item xs={2}><Link to='/' className={classes.root}>Search</Link></Grid>
                    <Grid item xs={2}><Link to='/bookshelf' className={classes.root}>Bookshelf</Link></Grid>
                </Grid>
                <br></br>
            </header>
        </div>
    )
}