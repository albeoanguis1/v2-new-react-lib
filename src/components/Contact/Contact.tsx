import React from 'react'
import { Navbar } from '../Navbar'
import { Divider  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
   
    text: {
        textAlign: 'center',
        paddingLeft: '10px',
        paddingRight: '100px',
        paddingTop:'100px',
        position: 'relative',
        color: 'black',
    }
})

export const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <p className={classes.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae libero ex vero mollitia hic, ipsa commodi dolorum deserunt facere deleniti dolor nisi vitae inventore quisquam praesentium. Minima veritatis corrupti magni! </p>
        </div>
    )
}