import { Typography, makeStyles } from "@material-ui/core"
import React, { useEffect } from "react"
import { Btn, NavbarOther } from "./../components"
import { Container, Title } from "./../globalStyles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Img from "../assets/img/dis.png"
import { Icon, InlineIcon } from "@iconify/react"
import udemyIcon from "@iconify-icons/logos/udemy-icon"
import udacityIcon from "@iconify-icons/logos/udacity"
import courseraIcon from "@iconify-icons/cib/coursera"
import futurelearnIcon from "@iconify-icons/simple-icons/futurelearn"
import LinkedinIcon from "@iconify-icons/logos/linkedin-icon"
import DatacampIcon from "@iconify-icons/simple-icons/datacamp"
// import EdurekaIcon from "./../"
import Helmet from "react-helmet"
import { Newfooter, Offerads } from "../components"
import { googleAnalyticsAction } from "./apicalling"
import { Link } from "react-router-dom"

// import udemyIcon from "@iconify/icons-simple-icons/udemy";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: "6% 0 0",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "23% 0 0",
    },
  },
  p: {
    textAlign: "center",
    padding: "0 200px",
    [theme.breakpoints.down("sm")]: {
      padding: "0 38px",
      fontsize: "18px",
    },
  },
  container: {
    marginTop: "2% !important",
    width: "100%",
    marginLeft: "auto !important",
    marginRight: "auto !important",
    margin: "auto",
    [theme.breakpoints.up("1440")]: {
      width: "100%",
      marginLeft: "auto !important",
      marginRight: "auto !important",
    },
  },
  paper: {
    maxWidth: "494px",
    "&:hover": {
      transform: "scale(1.04)",
    },
    transition: "transform .4s",
    height: "282px",
    position: "relative",
    margin: "5% auto",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      height: "88%",
    },
    [theme.breakpoints.up("1440")]: {
      width: "75%",
      maxWidth: "unset",
      marginBottom: "20%",
    },
  },
  btn: {
    background: "#fff",
    "&:hover": {
      backgroundColor: "#5C0090",
      color: "#FFFFFF",
    },
    position: "absolute",
    borderRadius: "5px",
    padding: "9px 15px",
    right: "5%",
    top: "2%",
    textDecoration: "none",
    color: "#000",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "15.4793px",
    lineHeight: "21px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14.5356,
      height: "16%",
    },
  },
  icon: {
    position: "absolute",
    width: "28px",
    height: "28px",
    left: "7%",
    top: "6%",
  },
  discountp: {
    position: "absolute",
    width: "291px",
    height: 42,
    left: "2%",
    bottom: "60%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 43.5356,
    lineHeight: "59px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20.5356,
      lineHeight: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16.5356,
      bottom: "50%",
      lineHeight: "25px",
    },
  },
  discountinfo: {
    position: "absolute",
    width: "384px",
    height: 42,
    left: "2%",
    bottom: "36%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 29.0237,
    lineHeight: "40px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20.5356,
      lineHeight: "25px",
      bottom: "48%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16.5356,
      lineHeight: "25px",
      bottom: "37%",
    },
  },
  coursera: {
    color: "#2E86C1",
  },
  futurelearn: {
    color: "#FC0484",
  },
  bottom: {
    width: "100%",
    height: "74px",
    display: "flex",
    padding: "0 20px",
    alignItems: "center",
  },
  bottomp: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "15.4793px",
    lineHeight: "21px",
    color: "#000",
  },
  valid: {
    marginLeft: "auto",
  },
  img: {
    display: "inline-block",
    width: "100%",
  },
  discountinfo1: {
    position: "absolute",
    width: "384px",
    height: 42,
    left: "2%",
    bottom: "36%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "40px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  discountinfo2: {
    position: "absolute",
    width: "384px",
    height: 42,
    left: "2%",
    bottom: "26%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "40px",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      fontSize: 10,
    },
  },
  icon1: {
    position: "absolute",
    width: "28px",
    height: "28px",
    left: "4%",
    top: "6%",
    color: "white",
  },
}))

function Discount(props) {
  useEffect(() => {
    googleAnalyticsAction()
  }, [])
  const classes = useStyles()
  return (
    <>
      <Helmet>
        <title>Discount PAGE | Find offers on Online Courses</title>
        <meta
          name='description'
          content='A hefty Course fee can’t stop you from Learning. Get significant Discounts on Professional Courses, get skilled, and make your way to the top.'
        />
      </Helmet>
      <NavbarOther />
      <Title className={classes.title}> Save more Learn more !</Title>
      <p className={classes.p}>
        A hefty course fee can't stop you from learning. Get huge discounts up
        to 90% off on Courses, Nanodegrees, Specializations, Annual and monthly
        subscriptions and much more from the top E-learning providers in the
        Industry like Coursera, Udacity, Datacamp, FutureLearn, Edureka, Udemy
        etc.
        <br></br>
        <br></br>
        Don't waste your precious time and money & Get started with your
        learning today!
      </p>

      <Container className={classes.container}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Link to={"https://datacamp.pxf.io/Ry2oDa"}>
              <Paper className={classes.paper}>
                <img src={Img} className={classes.img} />
                <a
                  href='https://datacamp.pxf.io/Ry2oDa'
                  className={classes.btn}
                >
                  Save Now!
                </a>
                <Icon icon={DatacampIcon} className={classes.icon1} />
                <div className={classes.discount}>
                  <h5 className={classes.discountp}>95 % off</h5>
                  <p className={classes.discountinfo2}>
                    Enroll for only $1 !!!
                  </p>
                </div>
                <div className={classes.bottom}>
                  <p className={classes.bottomp}>Provider: Datacamp</p>
                  <p className={`${classes.valid} ${classes.bottomp}`}>
                    Valid till :{"Tomorrow!"}
                  </p>
                </div>
              </Paper>
            </Link>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src={Img} className={classes.img} />
              <a href='https://bit.ly/3Cs03vI' className={classes.btn}>
                Grab the Deal
              </a>
              <Icon icon={udacityIcon} className={classes.icon} />
              <div className={classes.discount}>
                <h5 className={classes.discountp}>75 % off</h5>
                <p className={classes.discountinfo1}>
                  Fill the form & Save upto 75% Off on Udacity Nanodegree
                  Programs!
                </p>
              </div>
              <div className={classes.bottom}>
                <p className={classes.bottomp}>start date: - </p>
                <p className={`${classes.valid} ${classes.bottomp}`}>
                  Valid till : -
                </p>
              </div>
            </Paper>
          </Grid>
          {/* <Grid item md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src={Img} className={classes.img} />
              <a href='#' className={classes.btn}>
                Grab the Deal
              </a>
              <Icon
                icon={courseraIcon}
                className={`${classes.icon} ${classes.coursera}`}
              />
              <div className={classes.discount}>
                <h5 className={classes.discountp}>100% off</h5>
                <p className={classes.discountinfo}>
                  Save big on Coursera Plus
                </p>
              </div>
              <div className={classes.bottom}>
                <p className={classes.bottomp}>start date:</p>
                <p className={`${classes.valid} ${classes.bottomp}`}>
                  Valid till :{" "}
                </p>
              </div>
            </Paper>
          </Grid> */}

          <Grid item md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src={Img} className={classes.img} />
              <a href='https://bit.ly/3jKTZH0' className={classes.btn}>
                Grab the Deal
              </a>
              {/* <Icon icon={EdurekaIcon} className={classes.icon} /> */}
              <div className={classes.discount}>
                <h5 className={classes.discountp}>30 % off</h5>
                <p className={classes.discountinfo1}>
                  Use Coupon code - EDUHALLOWEEN
                </p>
              </div>
              <div className={classes.bottom}>
                <p className={classes.bottomp}>start date: - </p>
                <p className={`${classes.valid} ${classes.bottomp}`}>
                  Valid till : -{" "}
                </p>
              </div>
            </Paper>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Paper className={classes.paper}>
              <img src={Img} className={classes.img} />
              <a href='https://bit.ly/3iFxWBm' className={classes.btn}>
                Grab the Deal
              </a>
              <Icon icon={LinkedinIcon} className={classes.icon} />
              <div className={classes.discount}>
                <h5 className={classes.discountp}>Free Trial</h5>
                <p className={classes.discountinfo1}>
                  30 Day Free access to 17000+ Courses + LinkedIn Premium for
                  Free
                </p>
              </div>
              <div className={classes.bottom}>
                <p className={classes.bottomp}>start date:</p>
                <p className={`${classes.valid} ${classes.bottomp}`}>
                  Valid till :{" "}
                </p>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  )
}

export default Discount
