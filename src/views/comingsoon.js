import { Navbar, NavbarOther } from "./../components"
import { Container, Title } from "./../globalStyles"
import { makeStyles, TextField, Typography } from "@material-ui/core"
import React, { useEffect } from "react"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import { Newfooter, Offerads } from "../components"

import Helmet from "react-helmet"
import { googleAnalyticsAction } from "./apicalling"

const Styles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 100,
    [theme.breakpoints.down("xs")]: {
      marginLeft: "unset !important",
      marginRight: "unset !important",
    },
  },
  title: {
    margin: "15% 0 6% 0 !important",
  },
  des: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    fontWeight: "900",
    lineHeight: "49px",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  desspan: {
    color: "var(--primary)",
  },
  typography: {
    color: "#777",
    textAlign: "left",
    padding: 25,
    marginBottom: 50,
    lineHeight: "33px",
    maxWidth: "100vw",
    margin: "20px auto",
    [theme.breakpoints.down("xs")]: {
      padding: 2,
    },
  },
  typographyleft: {
    color: "#777",
    textAlign: "center",
    padding: 25,
    marginBottom: 50,
    lineHeight: "33px",
    maxWidth: "612px",
    margin: "20px 0",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: 2,
      textAlign: "left",
    },
  },
  search: {
    display: "flex",
    maxWidth: "100vw",
    alignItems: "center",
    justifyContent: "right",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}))

export default function About() {
  const classes = Styles()
  useEffect(() => {
    googleAnalyticsAction()
  })
  return (
    <>
      <Helmet>
        <title>Coming Soon! | Coursenator</title>
        <meta
          name='description'
          content='Learn from top universities/institutions/colleges/organisations and get a certificate for free.'
        />
      </Helmet>
      <Container className={classes.conatiner}>
        <NavbarOther />
        <Title className={classes.title}>Coming Soon!</Title>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  )
}
