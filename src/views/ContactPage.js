import { Container, Title } from './../globalStyles'
import React, { useEffect } from 'react'
import { Btn, Navbar, NavbarOther } from './../components'
import { makeStyles, Typography, TextField} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { SocialIconLink, SocialIconscontact, SocialMediaWrap } from './../components/Footer/FooterElements';
import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Helmet from 'react-helmet';
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from './apicalling';


const useStyles = makeStyles((theme) => ({
    conatiner : {
        marginTop : 100,
        [theme.breakpoints.down('xs')] : {
           marginLeft:'unset !important',
           marginRight:'unset !important' ,
        },
    },
    title:{
        margin:'15% 0 6% 0 !important'
    },
    btn:{
        background:'#4B4E54',
        maxWidth:250,
        width:'100%',
        '&:hover':{
            background:'#4B4E54',
        },
    },
    text : {
        textAlign: 'left',
        fontSize : "18px",
        width : "80%",
        margin : "0 0 4%",
        padding : "20px",
        lineHeight : 1.7,
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    details : {
        display : "flex",
        flexDirection : "column",
        padding : "20px",
        alignItems : "center",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            padding : "10px",
        },
    },
    cta : {
        display : "flex",
        flexDirection : "column",
        height : "fit-content",
        maxWidth : "776px",
        width:'100%',
        alignItems : "center",
        justifyContent : "center",
        border: "0.5px solid rgba(0, 0, 0, 0.005)",
        boxSizing: "border-box",
        boxShadow: "4px 4px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "25px",
        padding : "25px",
        marginTop : "20px",
        marginBottom : "20px",
    },
    ctatext : {
        padding : "10px",
        width : "90%",
        textAlign : "center",
    },
    search : {
        display : "flex",
        maxWidth : "100vw",
        alignItems : "center",
        justifyContent : "right",
        [theme.breakpoints.down('sm')] : {
            justifyContent : "center",
        },
    },
}))

export default function ContactPage() {
    const classes = useStyles()
    useEffect(()=>{
        googleAnalyticsAction();
    })
    return (
        <>
         <Helmet>
                <title>Contact us | Coursenator</title>
                <meta name="description" content="Anyone can contact us at Our Founder's and Co-founder's LinkedIn/Write at contactcoursenator@gmail.com/Reach to us at our socials given below." />
            </Helmet>
        <NavbarOther />
        <Container className={classes.conatiner}>
        {/* <div className = {classes.search}>
            <TextField
                label="Search"
                InputProps={{
                    endAdornment: (
                    <InputAdornment>
                        <IconButton>
                        <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
            </div> */}
            <Title className={classes.title}>
                Contact Us
            </Title>
            <div className = {classes.details}>
            <Typography className = {classes.text}>
            You can contact us on the social media pages listed below, our email id, or our Founder and Co-Founder's Linkedin Id's:
<p>Pranav Bajaj (Founder) - <a target="_blank" href=" https://www.linkedin.com/in/pranav-bajaj-coursenator/"> https://www.linkedin.com/in/pranav-bajaj-coursenator/</a></p>
<p>Pranay Mishra (Co-Founder) - <a target="_blank" href=" https://www.linkedin.com/in/pranay-mishra-7287021ab/"> https://www.linkedin.com/in/pranay-mishra-7287021ab/</a></p>
            </Typography>
            <div className = {classes.cta}>
                <Title>Get in Touch</Title>
                <Typography className = {classes.ctatext}>
                Have any questions? Email us by clicking on this link!
                </Typography>
                <Btn className={classes.btn}>
                    Email Us
                    <PlayArrowIcon />
                </Btn>
            </div>
            <Typography style = {{ fontSize : '20px', marginTop : "20px" }} >
                Or, reach us out on :
            </Typography>
        <SocialMediaWrap style = {{ marginTop : "15px" }}>
          <SocialIconscontact>
          <SocialIconLink href='https://www.linkedin.com/company/e-learners/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='https://www.facebook.com/Courses.do1' target='_blank' aria-label='Facebook'>
              <FaFacebook color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='https://www.facebook.com/Courses.do1' target='_blank' aria-label='Facebook'>
              <FaTwitter color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/e__learners/' target='_blank' aria-label='Instagram'>
              <FaInstagram color = "var(--primary)" />
            </SocialIconLink>
            <SocialIconLink href='https://t.me/ElearnersFreeCourses' target='_blank' aria-label='Telegram'>
              <FaTelegram color = "var(--primary)" />
            </SocialIconLink>
          </SocialIconscontact>
        </SocialMediaWrap>
            </div>
            </Container>
            <Newfooter />
      <Offerads />
        </>
    )
}
