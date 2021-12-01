import { Navbar, Btn, NavbarOther } from './../components'
import React from 'react'
import { Title, Container } from './../globalStyles'
import { makeStyles, Typography } from '@material-ui/core'
import img from './../assets/img/hero-bg.png'
import { Link } from 'react-router-dom'
import { Newfooter, Offerads } from "../components";


const useStyles = makeStyles((theme) => ({
    root : {
        alignItems : "center",
        justifyContent : "center",
        display : "flex",
        flexDirection : "column",
    },
    text : {
        width : "80%",
        textAlign : "center",
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        margin : 10,
        [theme.breakpoints.down('sm')] : {
            width : "100%",
        },
    },
    card : {
        display : "flex",
        flexDirection : "column",
        alignItems : 'center',
        justifyContent : 'center',
        color : "#2D283E",
        zIndex: 1,
        width: "100%",
        maxWidth: "1300px",
        marginRight: "auto",
        marginLeft: "auto",
        paddingRight:"50px",
        paddingLeft: "50px",
        [theme.breakpoints.down('md')]: {
            paddingLeft : "0%",
            paddingRight : "0%"
          },
    },
    article : {
        display : "flex",
        width : 800,
        height : 220,
        border : "0.3px solid white",
        boxSizing : "border-box",
        boxShadow : "4px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius : "10px",
        margin : 20,
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column",
            height : "fit-content",
            width : "90vw",
            alignItems : "center",
        },
    },
    section : {
        margin : 20,
        display : "flex",
        flexDirection : "column",
        alignItems : "left",
        justifyContent : "center",
        [theme.breakpoints.down('sm')] : {
            margin : 10,
        },
    },
    picture : {
        width : 180,
        height : 150,
    },
    articleTitle : {
        fontSize : 24,
        fontWeight : 600,
    },
    pathDetail : {
        color : "#2D283E",
        margin : "10px 0px",
    },
    viewCourse : {
        marginTop : 10,
        display : "flex",
        aligntems : "center",
        [theme.breakpoints.down('sm')] : {
            flexDirection : "column",
        },
    },
    viewButton : {
        marginLeft : "auto",
        [theme.breakpoints.down('sm')] : {
            marginLeft : 0,
        },
    },
    required : {
        marginTop : "15px" , 
        color : '#2D283E',
        [theme.breakpoints.down('sm')] : {
            margin : "0px 10px",
            marginTop : 0,
        },
    },
    hr : {
        opacity : "0.2",
    },
}))

function Customization() {
    const classes = useStyles()
    return (
        <>
            <NavbarOther />
            <Container>
                <div className = {classes.root}>
                <Title>
                    Customize learning path
                </Title>
                <div className = {classes.text}>
                    <Typography className = {classes.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis non urna vel feugiat. Sed lectus ante,
                    placerat et nibh vitae, faucibus dapibus justo.
                    </Typography>
                </div>

                <div className = {classes.card}>
                <div className = {classes.article}>
                    <div className = {classes.section}>
                    <img src = {img} className = {classes.picture} alt = "article" />
                    </div>
                    <div className = {classes.section}>
                    <Typography className = {classes.articleTitle}>
                        Lorem Ipsum
                    </Typography>
                    <Typography className = {classes.pathDetail}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec 
                    lobortis non urna vel feugiat. Sed lectus ante, placerat et nibh 
                    vitae, faucibus dapibus justo. Vestibulum vitae risus nec quam 
                    placerat hendrerit.
                    </Typography>
                    <hr className = {classes.hr} />
                    <div className = {classes.viewCourse}>
                        <Typography className = {classes.required}>Courses Required : 0</Typography>
                        <Link to = "/recommendedcourses" className = {classes.viewButton}>
                        <Btn>
                            View Recommended Courses
                        </Btn>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
                </div>
            </Container>
            <Newfooter />
      <Offerads />
        </>
    )
}

export default Customization

