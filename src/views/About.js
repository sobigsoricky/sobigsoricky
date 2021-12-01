import { Navbar, NavbarOther } from './../components'
import { Container, Title } from './../globalStyles'
import { makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Newfooter, Offerads } from "../components";



import Helmet from 'react-helmet';
import { googleAnalyticsAction } from './apicalling';

const Styles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 100,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 'unset !important',
            marginRight: 'unset !important',
        },
    },
    title: {
        margin: '15% 0 6% 0 !important'
    },
    des: {
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        fontWeight: '900',
        lineHeight: '49px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2rem',
        },
    },
    desspan: {
        color: 'var(--primary)'
    },
    typography: {
        color: "#777",
        textAlign: "left",
        padding: 25,
        marginBottom: 50,
        lineHeight: '33px',
        maxWidth: '100vw',
        margin: '20px auto',
        [theme.breakpoints.down('xs')]: {
            padding: 2,
        },
    },
    typographyleft: {
        color: "#777",
        textAlign: "center",
        padding: 25,
        marginBottom: 50,
        lineHeight: '33px',
        maxWidth: '612px',
        margin: '20px 0',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: 2,
            textAlign: "left",

        },
    },
    search: {
        display: "flex",
        maxWidth: "100vw",
        alignItems: "center",
        justifyContent: "right",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
}))

export default function About() {
    const classes = Styles()
    useEffect(()=>{
        googleAnalyticsAction();
    })
    return (
        <>
         <Helmet>
                <title>About Us | Coursenator</title>
                <meta name="description" content="Learn from top universities/institutions/colleges/organisations and get a certificate for free." />
            </Helmet>
            <Container className={classes.conatiner}>
                <NavbarOther />
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
                    About Us
                </Title>
                <h1 className={classes.des}>We aim to make <span className={classes.desspan}>online education</span>  feasible for everyone</h1>
                <Typography className={classes.typography}>
                    Coursenator is a search engine for online courses. We aggregate the best-reviewed online courses from various providers to make it easy to find the best courses on almost any subject, wherever they exist.
                    <p> We focus primarily on free courses (or Learn for Free) from many universities, institutes, and instructors offered via massive open online course (MOOC) platforms. Whatever your interest may be, our catalog will find a way to meet your needs.
                    </p>
                    <p>We aim to make online education feasible for everyone.</p>
                    <p>Through Coursenator, you can find courses based on your topic, Subjects, Sub-Subjects, select the mode of learning you require (courses, degrees, micro-credentials, etc.).
                    </p>
                    <p>You can even select the language you want your course to be in, decide the level of course you want (Beginner, Intermediate, or Advanced) and decide the duration of the course.</p>
                    <p>You can also review courses you've taken (and read other people's reviews), bookmark your favorite courses, follow universities, and receive personalized updates.</p>
                    <p>Our Site lets you choose your own learning path according to your needs (Paths created by our professional e-learning experts) and become a professional in your field.
                    </p>
                    <p>You also have the option to customize your own learning path. (simply pick and add courses according to your preference and create your own path)</p>
                    <p>We at coursenator believe in constantly upskilling and increasing the depth in one's work. Our platform is perfect for students, college students, working professionals, people looking to start a new career, or curious people who just like to explore new things. </p>
                </Typography>
                <Title className={classes.title}>
                    Who We Are
                </Title>
                <Typography className={classes.typography}>

                    <p>Pranav is currently pursuing his B.Com(Hons.) degree from Delhi University, India. Along with his degree, he's running this startup (Coursenator). During his first year of college, he knew he was interested in taking up online courses because there was so much to learn from other than his college academics.</p>

                    <p>When learning online, people educate themselves, upskill their work, learn something new, and get quickly started with their careers and paths.
                    </p>

                    <p>To get started with this venture Pranav set up a LinkedIn group and a LinkedIn page on 19th June 2020 by the name of E-learners. The same LinkedIn company page today has crossed over 135,000 followers by the name Coursenator.
                    </p>

                    <p>Around the same time, Pranay (Pranav's best friend) met him at a bar during the Pandemic, and Pranav introduced his startup to him. Now Pranay had his own share of online learning, and after listening to Pranav's pitch, Pranay decided to help him out. Day after day, they both got immensely invested in the work.</p>

                    <p>Pranav and Pranay together have experienced many ups and downs while working in coursenator, but they won't stop providing education to the people. Jointly, they have consulted more than 1000 people (on LinkedIn only) by personally recommending them to select their first or next online course. Along the way, they have met some fantastic course instructors & built some amazing connections around the world from different providers like Coursera, Udemy, edX, but they're also aware of the fact that the journey has just begun.</p>
                </Typography>
                <Title className={classes.title}>
                OUR MISSION
                </Title>
                <Typography className={classes.typography}>
            <p>Our mission is to make online education feasible for everyone. </p>
            <p>What do founders say about E-learning?</p>
            <p>"We feel that education is something that should be in everybody's hands, and through the advancement in technology these days, E-learning can change the world in the right direction."</p>
            <p>Imparting skills and knowledge through sharing video lectures or as they're known today as "Online courses" or through "MOOCs" is one of the best ways to educate someone who does not have access to the high fees of formal education in our society.</p>
            <p>There are people in India (where we live and have seen) that education is not something easily accessible or affordable by everyone, and only a few have the luxury to pay for those traditional forms of learning like going to a school, entering a college, and one cannot think about post-graduation due to the high fees.</p>
                     </Typography>
                     <Title className={classes.title}>
                     OUR VALUES
                </Title>
                <Typography className={classes.typography}>
                    <p>Our Founder Pranav believes in this saying that Formal education can only make you a living and not beyond that, but self-education through the means of the latest technology (Video lectures) and only the right books (nontraditional ones following a particular syllabus) can make you a fortune.</p>
                    <p>We believe that we can provide you the first step in your career, the</p>
                    <p>Here are some of the books that we base our values on</p>
                    <p>Rework
</p>
                    <p>The almanack of Naval Ravikant</p>
                    <p>Rich dad poor dad
</p>
           </Typography>
                {/* <Typography className={classes.typographyleft}>
                <Title className={classes.title}>
                    About Us
                </Title>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor ornare nisi vehicula malesuada.
                    Morbi rhoncus est ac ipsum euismod, id varius erat cursus. Donec enim neque, mollis maximus
                    vestibulum ac, ullamcorper sed ligula. Etiam pellentesque velit tellus, nec tempor massa ultricies
                    eget. Morbi sodales rhoncus pretium. Nam tincidunt augue magna, eu consectetur purus feugiat
                    eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    Praesent leo arcu, elementum non nulla ac, pulvinar viverra enim. Vestibulum aliquam nulla sit amet
                    leo imperdiet, sed vestibulum augue rhoncus. Ut aliquam dolor est, nec convallis libero viverra
                    semper. Integer ac lobortis nisl. Nunc consectetur velit metus, eget pulvinar diam commodo id.
                    Pellentesque non finibus augue.

                </Typography> */}
            </Container>
            <Newfooter />
      <Offerads />
        </>
    )
}
