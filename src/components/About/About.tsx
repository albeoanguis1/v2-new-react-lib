import React from 'react'
import { Navbar } from '../Navbar'
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


export const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit culpa optio! Praesentium totam amet odio dignissimos ex quis dolorem molestias asperiores repudiandae. Quaerat unde, temporibus repudiandae fugiat facilis ex.
            </p>
        </div>
    )
}