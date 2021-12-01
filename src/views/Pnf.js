import React, { Component } from 'react'
import { NavbarOther } from './../components'

import { withStyles } from "@material-ui/core/styles";
import Bg from '../assets/img/404.png'
import { Title } from '../globalStyles';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Newfooter, Offerads } from "../components";



const useStyle = (theme) => ({
    d404: {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        [theme.breakpoints.down('xs')]: {

        },
        '& .title': {
            fontSize: '60px',
            padding: '10% 0 0',
            [theme.breakpoints.down('xs')]: {
                padding: '30% 0 0',
                fontSize: '30px',
            },
        },
    },
    p: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '30px',
        lineHeight: '35px',
        textAlign: 'center',
        color: '#000',
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px',
        },

    },
    sp: {
        width: '44%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',

        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        color: '#000',
        margin: '5% auto',
        [theme.breakpoints.down('xs')]: {
            width: '90%',
            fontSize: '16px',
            lineHeight: '20px',
        },
    },
    textfield: {
        background: '#fff',
        width: '80%',
        minWidth: '759px',
        maxWidth: '759px',
        margin: 'auto',
        display: 'flex',
        filter: 'drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.27))',
        height: '50px',
        borderRadius: '30px',
        zIndex: '1',
        [theme.breakpoints.down('sm')]: {
            minWidth: '300px'
        },
    },
    icon: {
        color: 'var(--primary)'
    },
    btn: {
        width: '195px',
        height: '55px',
        filter: 'drop-shadow(10px 10px 40px rgba(0, 0, 0, 0.25))',
        background: '#802BB1',
        color: '#fff',
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '27px',
        borderRadius: '5px',
        textAlign: 'center',
        margin: '3% auto',
        display: 'block',
        [theme.breakpoints.down('xs')]: {
        width: '100px',
        height: '35px',
        fontWeight: '600',


            
        },

    },
    inputad:{
        height:'30px'
    }

})

class Pnf extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <NavbarOther />
                <div className={classes.d404}>
                    <Title className='title'>OOPS !</Title>
                    <p className={classes.p}>
                        404 - Page Not Found
                    </p>
                    <p className={classes.sp}>
                        The page you are looking for might have removed, had its name changed or temporarily unavailable.
                    </p>
                    <form>
                        <TextField
                            className={`${classes.textfield} textfieldsearch `}
                            id="outlined-search" variant="outlined" type="search"
                            placeholder="Search thousands of courses"
                            autoFocus='false'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton className={classes.icon}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <button type='submit' className={classes.btn}> search</button>
                    </form>
                </div>
                <Newfooter />
      <Offerads />
            </>
        )
    };
}

export default withStyles(useStyle)(Pnf);
