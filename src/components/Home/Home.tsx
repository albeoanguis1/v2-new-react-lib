import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';


interface Props {
    title: string;
}

const useStyles = makeStyles({
   
    background: {
        backgroundImage: 'linear-gradient(180deg, #e3ffe7 0%, #d9e7ff 100%)',
        width: '100%',
        height: '93%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#708090',
    },
    button_text: {
        color: '#708099',
        textDecoration: 'none',
    },
})

export const Home = ( props: Props ) => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/library' className={classes.button_text}>Take me to my collection</Link>
                </Button>
            </div>
            </div>
        </>
    )
}