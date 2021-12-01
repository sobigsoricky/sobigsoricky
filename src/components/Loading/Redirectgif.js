import React, { useState } from "react"
import Lottie from "react-lottie"
import * as redirect from "./redirect.json"
import { makeStyles } from "@material-ui/core"
import bg from "../../assets/img/redirectbg.png"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
// import { Redirect } from "react-router";
import { GiWindsock } from "react-icons/gi"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: redirect.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}
const useStyles = makeStyles((theme) => ({
  grid: {
    margin: "auto",
  },
  container1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: `url(${bg})`,
    width: "100%",
    minHeight: "425px",
    height: "100%",
    backgroundSize: "cover",
    position: "relative",
  },
  box1: {
    maxWidth: "499px",
    width: "100%",
    maxHeight: "425px",
    height: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "62%",
      height: "49%",
    },
  },
  box2: {
    maxWidth: "530px",
    width: "100%",
    maxHeight: "408px",
    height: "100%",
    position: "absolute",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "64%",
      height: "47%",
    },
  },
  box3: {
    maxWidth: "559px",
    width: "100%",
    maxHeight: "386px",
    height: "100%",
    position: "absolute",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "45%",
    },
  },
  title: {
    color: "#802BB1",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  p: {
    fontSize: "16px",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  subtitle: {
    color: "#802BB1",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  zindex: {
    zIndex: "999",
    paddingBottom: "10px",
  },
}))

function Redirectgif(props) {
  const classes = useStyles()

  const query = new URLSearchParams(props.location.search)
  console.log(query.get("q"))
  const [count, setCount] = useState(4)
  setTimeout(() => {
    if (count > 0) {
      setCount(parseInt(count) - 1)
    }
    if (count === 0) {
 
      // window.open(Buffer.from(query.get("q"), "base64").toString(), "_self");
      window.location.href=Buffer.from(query.get("q"), "base64").toString();
 
    }
  }, 1000)
  return (
    <>
      <div className={classes.container1}>
        <div className={classes.box1} />
        <div className={classes.box2} />
        <div className={classes.box3}></div>

        <div pb={3} className={classes.zindex}>
          <p className={classes.p}>Please wait...</p>
        </div>
        <div pb={3} className={classes.zindex}>
          <h1 className={classes.title}>Redirecting...</h1>
        </div>
        <Lottie options={defaultOptions} height={118} width={147} />
        <div py={2} className={classes.zindex}>
          <h2 className={classes.subtitle}>Leaving Coursenator</h2>
          <p className={classes.p}>You will be redirected in {count} seconds</p>
        </div>
      </div>
    </>
  )
}

export default Redirectgif
