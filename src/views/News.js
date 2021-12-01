import { Btn, NavbarOther } from "./../components"
import { makeStyles, Typography, TextField } from "@material-ui/core"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import img from "./../assets/img/hero-bg.png"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import clsx from "clsx"
import Helmet from "react-helmet"
import { Newfooter, Offerads } from "../components"
import { googleAnalyticsAction } from "./apicalling"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10% 0 0",
    [theme.breakpoints.down("sm")]: {
      margin: "15% 0 0",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "25% 0 0",
    },
  },
  btitle: {
    textAlign: "center",
    margin: "20px",
  },
  p: {
    textAlign: "center",
    margin: "4% 10%",
  },
  top: {
    marginLeft: "10%",
    marginRight: "10%",
    maxWidth: "100vw",
    width: "100%",
    display: "flex",
    height: 100,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 20,
      flexDirection: "column",
    },
  },
  title: {
    color: "#5C0090",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      margin: 5,
    },
  },
  vr: {
    borderLeft: "1px solid",
    opacity: 0.5,
    height: 32.5,
    marginRight: 15,
    marginLeft: 15,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#2D283E",
    zIndex: 1,
    maxWidth: "100vw",
    marginRight: "5%",
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0%",
      paddingRight: "0%",
    },
  },
  article: {
    display: "flex",
    width: "fit-content",
    height: 200,
    border: "0.3px solid white",
    boxSizing: "border-box",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: 20,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "fit-content",
      width: "80%",
    },
  },
  section: {
    margin: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  picture: {
    width: 180,
    height: 150,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  siteLink: {
    textDecoration: "none",
    "&:hover": {
      transform: "scale(1.01)",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
  },
  h2: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "21px",
      textAlign: "center",
      width: "100%",
    },
  },
  search: {
    display: "flex",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
}))

export default function News() {
  const classes = useStyles()
  useEffect(() => {
    googleAnalyticsAction()
  })
  return (
    <>
      <Helmet>
        <title>News & Articles </title>
        <meta
          name='description'
          content="Get updates of what's happening in the E-learning Industry in Coursenator's News & Articles section, aggregating news from the top authors and blogs worldwide."
        />
      </Helmet>
      <NavbarOther />
      <div className={classes.container}>
        <h1 className={classes.h1}> What is News & Articles all about ?</h1>
        <Typography className={classes.p}>
          Get updates on the E-learning Industry in Coursenator's News &
          Articles section, aggregating news from the top authors and blogs
          worldwide.
          <br></br>
          <br /> Our E-learning experts choose the best blogs related to Online
          courses, Offers, Discounts, Free courses lists, University Top
          courses, Analysis of leading providers etc., to help Learners get all
          the information in one place.
        </Typography>
        {[...Array(5)].map((articles) => {
          return (
            <div className={classes.body}>
              <div className={classes.article}>
                <div className={classes.section}>
                  <img src={img} className={classes.picture} alt='article' />
                </div>
                <div className={classes.section}>
                  <Typography className={classes.articleTitle}>
                    Lorem Ipsum
                  </Typography>
                  <Link className={classes.siteLink}>Site Name</Link>
                </div>
                <div className={classes.section}>
                  <Btn>Go to link</Btn>
                </div>
              </div>
            </div>
          )
        })}
        <Link style={{ margin: "25px 0" }}>Load more News & Articles</Link>
      </div>
      <Newfooter />
      <Offerads />
    </>
  )
}
