import { HeroContainer } from './../components/HeroSection/HeroSecElements'
import React from 'react'
import { NavbarOther, Btn } from './../components'
import { makeStyles, Typography } from '@material-ui/core'
import { CardContainer, 
    CardIcon, 
    CardInfo, 
    CardTitle, 
    CardWrapper, 
    Share, 
    Target, 
    Telescope, 
    CardText,
    Card } from './../components/Cards/CardElements'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Newfooter, Offerads } from "../components";

import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    body : {
        display  : "flex",
        flexDirection : 'column',
        maxWidth : 1300,
        marginRight : '15%',
        marginLeft : '15%',
        color : "#4B4E54",
        alignItems : 'center',
        justifyContent : 'center',
        margin : 50,
    },
    typography : {
        textAlign : "center",
        fontSize : 18,
        width : "80%",
        margin : 50,
        [theme.breakpoints.down('sm')] : {
            width : "100%",
            margin : 25,
        },
    },
    title : {
        fontWeight : 800,
        fontSize : 32,
        textTransform : 'uppercase',
        color : "#F2F1F1",
        textShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
        margin : 20,
        textAlign : "center",
    },
    titleText : {
        fontWeight : 500,
        fontSize : 20,
        textAlign : 'center',
        color : "#F2F1F1" ,
        textShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width : '70%',
        marginTop : '-10px',
        margin : 20,    
    },
    heroSection : {
        display : "flex",
        flexDirection : 'column',
        alignItems : "center",
        justifyContent : 'center',
    },
}))

function CustomizePage() {
    const classes = useStyles()
    return (
        <>
            <NavbarOther />
            <HeroContainer>
                <div className = {classes.heroSection}>
                <Typography className = {classes.title}>
                    Customize your learning path
                </Typography>
                <Typography className = {classes.titleText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada. 
                Morbi rhoncus est ac ipsum euismod, id varius erat cursus.
                </Typography>
                <Link to = "/signup">
                <Btn>
                    Customize now
                    <PlayArrowIcon />
                </Btn>
                </Link>
                </div>
            </HeroContainer>
            <div className = {classes.body}>
            <div className = {classes.cards}>
            <CardWrapper>
            <CardContainer>
            <Card>
              <CardInfo>
                <CardIcon>
                    <Telescope />
                </CardIcon>
                <CardTitle>
                    Lorem Ipsum
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada. 
                </CardText>
              </CardInfo>
            </Card>
            <Card>
              <CardInfo>
                <CardIcon>
                  <Target />
                </CardIcon>
                <CardTitle>
                    Lorem Ipsum
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada. 
                </CardText>
              </CardInfo>
            </Card>
            <Card   >
              <CardInfo>
                <CardIcon>
                    <Share />
                </CardIcon>
                <CardTitle>
                    Lorem Ipsum
                </CardTitle>
                <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada. 
                </CardText>
              </CardInfo>
            </Card>
          </CardContainer>
        </CardWrapper>
            </div>
            <Typography className = {classes.typography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada.
            Morbi rhoncus est ac ipsum euismod, id varius erat cursus. Donec enim neque, mollis maximus 
            vestibulum ac, ullamcorper sed ligula.
            </Typography>
            </div>
            <Newfooter />
      <Offerads />
        </>
    )
}

export default CustomizePage
