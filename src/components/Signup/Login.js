// import {  } from '../../globalStyles'
import React, { Component } from 'react'
import { CheckBoxArea, Insert1, Label, Button, P, SignupBox, SignupContainer, Bp, SignupTitle, Social, Li, SignupOutter, SignupLeft, SignupRight, Heading, Par, Subheading } from './SignupElements'
import StyledCheckbox from './StyledCheckbox'
import { Link, Redirect } from 'react-router-dom'
import {
    FaFacebook,
    FaLinkedin,
    FaGoogle

} from "react-icons/fa";
import { withStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';

import { cryptoDecrypt, onPostData, isLogin } from '../../views/apicalling';
import CircularProgress from '@material-ui/core/CircularProgress';
import AlertNofitifation from '../notification/snackbars'
import Cookies from 'universal-cookie';
import { GoogleLogin } from 'react-google-login';
const cookies = new Cookies();

const useStyle = (theme) => ({
    griditem: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    title: {
        fontSize: '32px !important',
        fontWeight: '600 !important',
        padding: ' 41% 32px 0 44px !important'

    },
    left: {
        width: '100%',
    },
    sub: {
        padding: '0 20px',
    },
    check: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '104%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        },
    },
    signinlink: {
        fontSize: '16px'
    },
    pa: {
        fontSize: '14px'
    }

})

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnLoading: false,
            username: '',
            password: '',
            email: '',
            isOpen: false,
            message: '',
            type: 'info',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        this.setState({
            btnLoading: true
        });
        if (this.state.username.trim() !== '' && this.state.password.trim() !== '') {
            onPostData('api/user/login', {
                email: this.state.username,
                password: this.state.password
            }
            ).then((response) => {
                if (response.data.error === false) {
                    cookies.set('token', response.data.token);
                    cookies.set('__sdk', response.data.a);
                    this.setState({
                        btnLoading: false,
                        isOpen: true,
                        message: response.data.message,
                        type: 'success',
                        islogin: true
                    });


                }
                else {
                    this.setState({
                        btnLoading: false,
                        isOpen: true,
                        message: response.data.message,
                        type: 'error'
                    });
                }
            }).catch((error) => {
                this.setState({
                    btnLoading: false,
                    isOpen: true,
                    message: 'error',
                    type: 'error'
                });
            });
        }
        else {
            this.setState({
                btnLoading: false,
                isOpen: true,
                message: 'Fill required fields',
                type: 'error'
            });
        }
    }
    setReturnData = (data) => {
        this.setState(data)
    }
    responseGoogle = (response) => {
        console.log(response);
    }
    render() {
        const { classes } = this.props;

        return (
            <>
                {isLogin() === true ? <Redirect to='/profile' /> : null}
                {this.state.islogin === true ? <Redirect to='/profile' /> : null}
                {this.state.isOpen === true ? <AlertNofitifation isOpen={this.state.isOpen} message={this.state.message} setData={this.setReturnData.bind(this)} type={this.state.type} /> : ''}
                <SignupContainer>


                    {/* <SignupBox className={classes.signinbox}>
                        <SignupTitle>
                            Welcome Back!
                        </SignupTitle>
                        <Insert1 placeholder="Username/ E-mail" type='email' onChange={(e) => this.setState({ username: e.target.value })} />

                        <Insert1 placeholder="Password" type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                        <div className={classes.check}>
                            <CheckBoxArea>
                                <StyledCheckbox />
                                <Label>
                                    Keep me logged in
                                </Label>
                            </CheckBoxArea>
                            <Link to="/profile" className={`signinlink ${classes.signinlink}`}>

                                Forgot Password ?

                            </Link>
                        </div>
                        {this.state.btnLoading ? <center><CircularProgress /></center> :
                            <Button onClick={() => this.handleSubmit()} >
                                <P> Log in</P>
                            </Button>}

                        <Bp>
                            Don’t have an account yet?
                        </Bp>
                        <p className={classes.pa}>Sign up to Coursenator for free and get more out of it.
                        </p>
                        <Link to="/signup" className='signinlink'>

                            Sign Up

                        </Link>
                    </SignupBox> */}
                    <SignupOutter>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            style={{ height: '100%' }}
                        >
                            <Grid item md={5} sm={6} xs={12} style={{
                                height: '100%',

                            }} className={classes.griditem}>
                                <SignupLeft className={classes.left}>

                                    <Heading className={classes.title}>LEARN MORE. ACHIEVE MORE.</Heading>
                                    {/* <Par>Sign up to Coursenator for free and get access to our Tracks feature.</Par> */}
                                    <Subheading className={classes.sub}>Login in with your social media account</Subheading>
                                    <Social>
                                        <Li>
                                           
                                            <FaFacebook className='loginicon' />
                                        </Li>
                                        <Li>
                                            <FaGoogle className='loginicon' />

                                        </Li>
                                        <Li>

                                            <FaLinkedin className='loginicon' />
                                        </Li>

                                    </Social>
                                </SignupLeft>
                            </Grid>
                            <Grid item md={7} sm={6} xs={12} style={{ height: '100%' }}>
                                <SignupRight>
                                    <SignupBox className={classes.signinbox}>
                                        <SignupTitle>
                                            Welcome Back!
                                        </SignupTitle>
                                        <Insert1 placeholder="Username/ E-mail" type='email' onChange={(e) => this.setState({ username: e.target.value })} />

                                        <Insert1 placeholder="Password" type='password' onChange={(e) => this.setState({ password: e.target.value })} />
                                        <div className={classes.check}>
                                            <CheckBoxArea>
                                                <StyledCheckbox />
                                                <Label>
                                                    Keep me logged in
                                                </Label>
                                            </CheckBoxArea>
                                            <Link to="/profile" className={`signinlink ${classes.signinlink}`}>

                                                Forgot Password ?

                                            </Link>
                                        </div>
                                        {this.state.btnLoading ? <center><CircularProgress /></center> :
                                            <Button onClick={() => this.handleSubmit()} >
                                                <P> Log in</P>
                                            </Button>}

                                        <Bp>
                                            Don’t have an account yet?
                                        </Bp>
                                        <p className={classes.pa}>Sign up to Coursenator for free and get more out of it.
                                        </p>
                                        <Link to="/profile" className='signinlink'>

                                            Log In

                                        </Link>
                                    </SignupBox>
                                </SignupRight>
                            </Grid>
                        </Grid>
                    </SignupOutter>

                </SignupContainer>
            </>
        )
    }
}

export default withStyles(useStyle)(Login);