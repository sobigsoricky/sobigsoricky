import { BreadCrumb, NavbarOther, Btn } from '../components'
import React from 'react'
import { SearchBar } from '../components/HeroSection/HeroSecElements'
import { makeStyles, Typography } from '@material-ui/core'
import { Title } from '../globalStyles'
import { Styles } from '../assets/jss/Styles'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { ExternalLink } from 'react-external-link'
import TextField from '@material-ui/core/TextField'
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LanguageIcon from '@material-ui/icons/Language';
import { FaAward } from 'react-icons/fa'
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import DateRangeIcon from '@material-ui/icons/DateRange';
import clsx from 'clsx'
import styled from 'styled-components'
import anonymous from './../assets/img/anonymous.png'
import ReadOnly from './../components/StarRating/ReadOnly'
import Pristine from './../components/StarRating/Pristine'
import barChartLine from "@iconify/icons-bi/bar-chart-line";
import { Newfooter, Offerads } from "../components";


const Line = styled.hr`
    width : 300px;
    opacity : 0.2;
    @media screen and (max-width : 768px){
        width : 90%;
    }
`

const productstyles = makeStyles((theme) => ({
    container: {
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        maxWidth: "100vw",
        marginLeft: "10%",
        marginRight: "10%",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "3%",
            marginRight: "3%",
        },
    },
    title: {
        display: "flex",
        marginRight: "auto",
    },
    university: {
        color: "#777",
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    subtext: {
        fontSize: 14,
    },
    ratingsection: {
        display: "flex",
        marginRight: "auto",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        },
    },
    linksection: {
        display: "flex",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
    },
    logo: {
        marginLeft: "auto",
        [theme.breakpoints.down('sm')]: {
            marginLeft: "0",
        },
    },
    link: {
        textDecoration: "none",
        color: "#5C0090",
        display: "flex",
        alignItems: "center",
        padding: 20,
        [theme.breakpoints.down('sm')]: {
            marginTop: "-25px",
        },
        '&:hover': {
            transform: 'scale(1.02)',
        },
    },
    star: {
        display: "flex"
    },
    courseSection: {
        display: "flex",
        height: "fit-content",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    details: {
        margin: 5,
        color: "#1A2237",
        [theme.breakpoints.down('sm')]: {
            width: "fit-content"
        },
    },
    course: {
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        marginRight: "auto",
        width: "fit-content",
        border: "1px solid rgba(0, 40, 141, 0.25)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: 15,
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    },
    coursecard: {
        textDecoration: 'none',
        color: "#000",
        marginRight: "auto",
        margin: "10px 0px ",
        padding: "5px",
        display: "flex",
    },
    prolink: {
        marginTop: 25,
    },
    btn: {
        marginTop: 20,
        marginLeft: "25%",
        marginBottom: -10
    },
    subtitle: {
        fontSize: 32,
        fontWeight: 600,
        margin: 5,
        color: "#1A2237"
    },
    subdetails: {
        display: 'flex',
        alignItems: 'center',
        marginRight: "auto",
        [theme.breakpoints.down('md')]: {
            marginTop: "10%",
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: "0px",
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
        },
    },
    subdata: {
        marginRight: 100,
        marginTop: -100,
        [theme.breakpoints.down('sm')]: {
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginRight: "auto",
            padding: 5,
        },
    },
    writereview: {
        marginRight: "auto",
        width: "750px",
        height: "fit-content",
        background: "#FFFFFF",
        border: "0.5px solid #802BB1",
        boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        padding: 25,
        margin: 15,
        marginLeft: 0,
        marginBottom: "30px",
        [theme.breakpoints.down('sm')]: {
            width: "90vw",
            height: "fit-content",
        },
    },
    showreview: {
        marginRight: "auto",
        width: "750px",
        height: "fit-content",
        border: "0.5px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border-box",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: 10,
        padding: 25,
        display: "flex",
        alignItems: "center",
        marginBottom: "25px",
        [theme.breakpoints.down('sm')]: {
            width: "90vw",
            height: "fit-content",
        },
    },
    reviewtext: {
        color: "#4B4E54"
    },
    reviewname: {
        fontWeight: 600,
        color: "#5C0090",
        marginBottom: 10,
    },
    reviewtitle: {
        display: "flex",
    },
    input: {
        display: "flex",
        marginTop: "-25px",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55ch',
        },
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    review: {
        display: "flex",
        padding: 20
    },
    postbtn: {
        marginLeft: "auto",
    },
    coursetext: {
        marginLeft: 15,
    },
    icon: {
        width: 22.5,
        height: 22.5,
    },
    ratingsection2: {
        display: "flex",
        color: "#000",
        [theme.breakpoints.down('sm')]: {
        },
    },
    reviews: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
    },
    comment: {
        width: "550px",
        marginTop: "-20px",
        color: "var(--grey)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            height: "fit-content",
            fontSize: '14px',
        },
    },
    dp: {
        width: "95px",
        height: "95px",
        borderRadius: "50px",
        border: "0.5px solid rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
        [theme.breakpoints.down('sm')]: {
            width: "75px",
            height: "75px",
        },
    },
    inputlabel: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5px",
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
    },
}))

export default function CourseDetails(props) {
    const classes = Styles()
    const styles = productstyles()
    console.log('dddd');
    const renderMobileMenu = (
        <>
            <Link className={styles.link}>
                <Typography className={styles.subtext}>0 reviews</Typography>
            </Link>
            <Link className={styles.link}>
                <BookmarkIcon />
                <Typography className={styles.subtext}>
                    Bookmarks
                </Typography>
            </Link>
            <Link className={styles.link}>
                <ShareIcon />
                <Typography className={styles.subtext}>
                    Share Course
                </Typography>
            </Link>
        </>
    );
    return (
        <>
            <NavbarOther />
            <div className={styles.container}>
                <BreadCrumb />
                <div className={classes.searcharea}>
                    <SearchBar placeholder="Search thousands of course" />
                    <Btn>Search</Btn>
                </div>
                <Title className={styles.title}>Course Title</Title>
                <Typography class={styles.university}>University Name via Provider</Typography>
                <div className={styles.ratingsection}>
                    <div className={styles.linksection}>
                        <ReadOnly />
                        <div className={styles.sectionDesktop}>
                            <Link className={styles.link}>
                                <Typography className={styles.subtext}>0 reviews</Typography>
                            </Link>
                            <Link className={styles.link}>
                                <BookmarkIcon />
                                <Typography className={styles.subtext}>
                                    Bookmarks
                                </Typography>
                            </Link>
                            <Link className={styles.link}>
                                <ShareIcon />
                                <Typography className={styles.subtext}>
                                    Share Course
                                </Typography>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.sectionMobile}>
                        {renderMobileMenu}
                    </div>
                    <div className={styles.logo}>
                        <Typography className={styles.subtext}>
                            Offered by :
                        </Typography>
                        <Link style={{ padding: "20px" }}>
                            <img alt="Logo" />
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Typography className={styles.subtitle}>Overview</Typography>
                    </div>
                    <div className={styles.courseSection}>
                        <div className={styles.section}>
                            <Typography className={styles.details}>
                                In 2020 the world will generate 50 times the amount of data as in 2011.
                                And 75 times the number of information sources (IDC, 2011). Being able to
                                use this data provides huge opportunities and to turn these opportunities
                                into reality, people need to use data to solve problems.
                                <br /><br />
                                This Specialization, in collaboration with Tableau, is intended for newcomers
                                to data visualization with no prior experience using Tableau. We leverage
                                Tableau's library of resources to demonstrate best practices for data
                                visualization and data storytelling. You will view examples from real world
                                business cases and journalistic examples from leading media companies.
                                <br /><br />
                                By the end of this specialization, you will be able to generate powerful
                                reports and dashboards that will help people make decisions and take action
                                based on their business data. You will use Tableau to create high-impact
                                visualizations of common data analyses to help you see and understand your
                                data. You will apply predicative analytics to improve business decision making.
                                The Specialization culminates in a Capstone Project in which you will use
                                sample data to create visualizations, dashboards, and data models to prepare
                                a presentation to the executive leadership of a fictional company.
                            </Typography>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.course}>
                                <ReactPlayer
                                    muted={true}
                                    controls={true}
                                    width={"300px"}
                                    height={"150px"}
                                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                                <ExternalLink href="https://google.com" >
                                    <Btn className={styles.btn}>Go to course</Btn>
                                </ExternalLink>
                                <div>
                                    <Link className={styles.coursecard}>
                                        <CastForEducationIcon className={styles.prolink} />
                                        <Typography
                                            className={clsx(styles.coursetext, styles.prolink)}>
                                            Provider Name
                                        </Typography>
                                    </Link>
                                </div>
                                <Line />
                                <div className={styles.coursecard}>
                                    <LanguageIcon className={styles.icon} />
                                    <Typography className={styles.coursetext}>
                                        Language
                                    </Typography>
                                </div>
                                <Line />
                                <div className={styles.coursecard}>
                                    <FaAward className={styles.icon} />
                                    <Typography className={styles.coursetext}>
                                        Certificate details
                                    </Typography>
                                </div>
                                <Line />
                                <div className={styles.coursecard}>
                                    <HourglassFullIcon className={styles.icon} />
                                    <Typography className={styles.coursetext}>
                                        Course duration
                                    </Typography>
                                </div>
                                <Line />
                                <div className={styles.coursecard}>
                                    <DateRangeIcon className={styles.icon} />
                                    <Typography
                                        className={styles.coursetext}>
                                        Start date
                                    </Typography>
                                </div>
                                <div className={styles.coursecard}>
                                    <DateRangeIcon className={styles.icon} />
                                    <Typography
                                        className={styles.coursetext}>
                                        Start date
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subdetails}>
                    <div className={styles.subdata}>
                        <Typography style={{ fontWeight: '600' }}>Course taught by :</Typography>
                        <Typography>Instructor's name</Typography>
                    </div>
                    <div className={styles.subdata}>
                        <Typography style={{ fontWeight: '600' }}>Subject :</Typography>
                        <Typography>Subject Name</Typography>
                    </div>
                    <div className={styles.subdata}>
                        <Typography style={{ fontWeight: '600' }}>Sub Subject :</Typography>
                        <Typography>Sub-Subject Name</Typography>
                    </div>
                </div>
                <Title className={styles.title}>Review</Title>
                <div className={styles.writereview}>
                    <div className={styles.reviewtitle}>
                        <Typography className={styles.reviewtext}>
                            Provide your review for the course &nbsp;
                        </Typography>
                        <Typography className={styles.reviewname}>
                            Course Name
                        </Typography>
                    </div>
                    <Pristine />
                    <>
                        <form className={styles.input}>
                            <Typography className={styles.inputlabel}>Add a comment</Typography>
                            <TextField
                                id="review"
                                label="Review"
                                multiline
                                rows={2}
                                variant="outlined" />
                        </form>
                    </>
                    <Btn className={styles.postbtn}>Post</Btn>
                </div>
                {[...Array(3)].map(showreviewarray => {
                    return (<div className={styles.showreview}>
                        <>
                            <img src={anonymous} className={styles.dp} alt="" />
                        </>
                        <div className={styles.reviews}>
                            <div className={styles.ratingsection2}>
                                <ReadOnly />
                                <Typography style={{ marginLeft: "10px" }}>a month ago</Typography>
                            </div>
                            <Typography className={styles.comment}>
                                Lorem ipsum dolor sit amet, fabulas molestiae nam ad,
                                eos an sonet deleniti volutpat. Mel sonet persecuti
                                complectitur ut.Ea nam etiam soleat volutpat, dolor
                                maiestatis ius ad. Liber eirmod et sea, ridens commodo
                                feugait cum te, at vix dolor tritani.
                            </Typography>
                        </div>
                    </div>
                    )
                })}
                <Link>Load more</Link>
            </div>
            <Newfooter />
      <Offerads />
        </>
    )
}
