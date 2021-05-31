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
                <h2>My Book List</h2>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={1}><Link to='/' className={classes.root}>Home</Link></Grid>
                    <Grid item sm={1}><Link to='/bookshelf' className={classes.root}>Bookshelf</Link></Grid>
                </Grid>
                <br></br>
            </header>
        </div>
    )
}