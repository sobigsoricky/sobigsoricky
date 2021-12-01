import { Button, Typography } from "@material-ui/core"
import React from "react"
import { FaSearch } from "react-icons/fa"
import {
  HeroBtn,
  HeroContainerOverly,
  HeroContainer,
  HeroTitle,
  SearchBar,
  HeroWrapper,
} from "./HeroSecElements"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from "@material-ui/core/styles"
import Searchbar from "../search/Searchbar"
import { Link } from "react-router-dom"
import Btn from "../Button/Btn"
import Typewriter from "typewriter-effect"

const useStyles = makeStyles((theme) => ({
  herocontainer: {
    position: "relative",
  },
  title: {
    width: "34%",
    margin: "0 0 2%",
    borderRadius: "30px",
    fontSize: "25px !important",
    [theme.breakpoints.down("1281")]: {
      width: "45%",

      margin: "0 0 3%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "82%",
      fontSize: 25,
    },
    [theme.breakpoints.down("xs")]: {
      margin: " -19vw 0 40px !important",
    },
  },
  textfield: {
    background: "#fff",
    width: "100%",
    minWidth: "890px",
    filter: "drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.27))",
    height: "50px",
    borderRadius: "30px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      minWidth: "285px",
      height: 40,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "20px",
    },
  },
  icon: {
    color: "var(--primary)",
  },
  span: {
    color: "#000",
  },
  p: {
    color: "var(--white)",
    fontWeight: "400",
    fontSize: "22px",
    zIndex: "1",
    margin: "10px 0",
    width: "50vw",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      width: "90vw",
    },
    [theme.breakpoints.up("1703")]: {
      width: "30vw",
      marginTop: "30px",
    },
  },
  suggestionul: {
    left: "32px",
    position: "absolute",
    background: "#fff",
    top: "50px",
    zIndex: "99",
    width: "97%",
    maxWidth: "830px",
    boxShadow: "8px 8px 20px #C4C4C4",
    borderRadius: " 0px 0px 20px 20px",
    [theme.breakpoints.down("sm")]: {
      left: "2px",
    },
  },
  suggestionli: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 20px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  suggestionname: {
    fontWeight: "600",
    fontSize: "16px",
    color: "rgba(75, 78, 84, 0.74)",

    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  suggestionuniversity: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#B170D7",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  suggestionright: {
    marginRight: "5%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
  suggestionprovider: {
    fontWeight: "600",
    fontSize: "14px",
    color: "#2D283E",
    textAlign: "center",
    filter: "drop-shadow(0px 4px 4px #00000040)",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  suggestionrating: {
    fontWeight: "600",
    fontSize: "30px",
    color: "#C4C4C4",
    textAlign: "center",
  },
  suggestionsee: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#B170D7",
    textAlign: "center",
    padding: "1%",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "var(--primary)",
  },
  btncorner: {
    position: "absolute",
    bottom: "7%",
    right: "1%",
    backgroundColor: "#17141422",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#17141475",
    },

    [theme.breakpoints.down("xs")]: {
      right: "55px",
      bottom: "20%",
    },
  },
  cornerbtn: {
    color: "#fff",
    lineHeight: "23px",
  },
  btnfree: {
    fontSize: "18px",
    background: "none",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      height: "20px",
    },
  },
}))

function HeroSection() {
  const classes = useStyles()
  return (
    <>
      <HeroContainer className={classes.herocontainer}>
        <HeroContainerOverly />
        <HeroTitle className={classes.title}>
          We aim to make
          <span className={classes.span}> Online Education </span> feasible for
          everyone.
        </HeroTitle>
        <HeroWrapper style={{ position: "relative" }}>
          <Searchbar classes={classes} />
        </HeroWrapper>
        <Typography className={`${classes.p} `}>
          <Typewriter
            options={{
              strings: [
                "   Thousands of Courses updated every single day !",
                "Sign Up and get FREE courses in your inbox Today!",
              ],
              autoStart: true,
              loop: true,
              delay: 20,
              deleteChars: 20,
            }}
          />
        </Typography>
        <Link to='/freecertificate?q=programming' className={classes.cornerbtn}>
          <div className={classes.btncorner}>
            <Btn className={classes.btnfree}>Discover Free courses +</Btn>
          </div>
        </Link>
      </HeroContainer>
    </>
  )
}

export default HeroSection
