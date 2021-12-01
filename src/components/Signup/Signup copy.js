import React , {Component} from 'react'
import { CheckBoxArea,Button, Insert, Label, SignupBox, SignupContainer, SignupTitle,SignupRight,P,Bp,SignupOutter,SignupLeft,Heading,Par,Subheading,Social,Li } from './SignupElements'
import StyledCheckbox from './StyledCheckbox'
import {
    FaFacebook,
    FaLinkedin,
    FaGoogle

} from "react-icons/fa";
import { Link, Redirect } from 'react-router-dom'

import { withStyles } from "@material-ui/core/styles";

import Grid from '@material-ui/core/Grid';

import { cryptoDecrypt, onPostData } from '../../views/apicalling';
import CircularProgress from '@material-ui/core/CircularProgress';
import AlertNofitifation from '../notification/snackbars'

const useStyle  = (theme)  => ({
    griditem:{
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
})


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnLoading: false,
            username: '',
            password: '',
            cpasword:'',
            email:'',
            name:'',
            isOpen: false,
            message: '',
            type: 'info',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setReturnData=this.setReturnData.bind(this);

    }
    handleSubmit = (e) => {
        this.setState({
            btnLoading: true
        });      
        if (this.state.username.trim() !== '' && this.state.username.length>=6   && this.state.password.trim()!=='' ) {
            
            onPostData('api/user/registration', {
                email: this.state.email,
                password: this.state.password,
                name:this.state.name,
                username:this.state.username
            }
            ).then((response) => {
                if (response.data.error === false) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('__sdk', response.data.a);
                    this.setState({
                        btnLoading: false,
                        isOpen: true,
                        message: response.data.message,
                        type: 'success',
                        username: '',
                        password: '',
                        cpasword:'',
                        email:'', 
                        name:''                     
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
            })
        }
    }
    setReturnData = (data) => {
        this.setState(data)
    }
    render(){
        const { classes } = this.props;

        return (
            <>
                {this.state.isOpen === true ? <AlertNofitifation isOpen={this.state.isOpen} message={this.state.message} setData={this.setReturnData.bind(this)} type={this.state.type} /> : ''}

            <SignupContainer>
            <SignupOutter>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            style={{height: '100%'}}
                            >
                            <Grid item md={5} sm={6} xs={12}  style={{height: '100%',
                         
                        }} className={classes.griditem}>
                                <SignupLeft>

                                    <Heading>We aim to make online education feasible for everyone.</Heading>
                                    <Par>Sign up to Coursenator for free and get access to our Tracks feature.</Par>
                                    <Subheading>Sign in with your social media account</Subheading>
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
                            <Grid item md={7} sm={6} xs={12}  style={{height: '100%'}}>
                            <SignupRight>
                            <SignupBox>
                                <SignupTitle>
                                    Sign In
                                </SignupTitle>
                                <Insert placeholder="Username" type='text' onChange={(e) => this.setState({ username: e.target.value })} />
                                <Insert placeholder="E-mail"  onChange={(e) => this.setState({ email: e.target.value })} />
                                <Insert placeholder="Password" type='password' onChange={(e) => this.setState({ password: e.target.value })} />                                
                                 {/* <CheckBoxArea>
                                    <StyledCheckbox />
                                    <Label>
                                        Remember me
                                    </Label>
                                </CheckBoxArea>  */}
                                {this.state.btnLoading ? <center><CircularProgress /></center> :
                                    <Button onClick={() => this.handleSubmit()} >
                                      <P> Sign up</P> 
                                    </Button>}

                                <Bp>
                                    Have an account already ?
                                </Bp>
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


export default withStyles(useStyle)(Signup);

