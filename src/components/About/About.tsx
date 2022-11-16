import React from 'react'
import { Navbar } from '../Navbar'
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import bMan from '../../assets/images/bookman.svg'
import './about.css'
import Grid from '@mui/material';
import Paper from '@mui/material';




const useStyles = makeStyles({
//    was going to use but CSS is easier
})


export const About = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Container>
                <h2 className='title'>Who we are.</h2>
            </Container>
            <Container>
                <img  className="bmansvg" src={bMan}></img>
            </Container>
            <Container className='boxes'>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <h4>Honor</h4>
                            <p>We take pride in the user expereince with focus on having a deep understanding of users, what they need, what they value, their abilities, and also their limitations.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <h4>Courage</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo facilis placeat voluptate repellendus blanditiis quam tempora deserunt ducimus.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card" id='card3'>
                            <h4>Commitment</h4>
                            <p>We are committed to provide individuals, employers, professionals with innovative benefits, products and services. </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}