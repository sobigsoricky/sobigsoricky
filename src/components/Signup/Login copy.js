import { Button } from '../../globalStyles'
import React, { Component } from 'react'
import { CheckBoxArea, Insert, Label, SignupBox, SignupContainer, Bp, SignupTitle, Social, Li, SignupOutter, SignupLeft, SignupRight, Heading, Par, Subheading } from './SignupElements'
import StyledCheckbox from './StyledCheckbox'
import { Link } from 'react-router-dom'
import {
    FaFacebook,
    FaLinkedin,
    FaGoogle

} from "react-icons/fa";
import Grid from '@material-ui/core/Grid';


export default class Login extends Component {
    render() {
        return (
            <>
                <SignupContainer>
                    <Grid container  className='signupcontainer'>
                        <SignupOutter>
                            <Grid item  md={5} sm={6} xs={12}>
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
                            <Grid item md={7} sm={6} xs={12}>
                                <SignupRight>
                                    <SignupBox>
                                        <SignupTitle>
                                            Sign In
                                        </SignupTitle>
                                        <Insert placeholder="Username" type='text' />
                                        <Insert placeholder="E-mail" type='email' />

                                        <Insert placeholder="Password" type='password' />
                                        {/* <CheckBoxArea>
                                    <StyledCheckbox />
                                    <Label>
                                        Remember me
                                    </Label>
                                </CheckBoxArea> */}
                                        <Link to="/profile">
                                            <Button className='signin'>
                                                Sign In
                                            </Button>
                                        </Link>
                                        <Bp>
                                            Have an account already ?
                                        </Bp>
                                        <Link to="/profile" className='signinlink'>

                                            Log In

                                        </Link>
                                    </SignupBox>
                                </SignupRight>


                            </Grid>


                        </SignupOutter>

                    </Grid>
                </SignupContainer>
            </>
        )
    }
}

