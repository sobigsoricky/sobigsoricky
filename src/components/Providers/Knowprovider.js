import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import { Button } from "../../globalStyles"
import img1 from "./logo/codecademy.svg"
import img2 from "./logo/coursera.svg"
import img3 from "./logo/edx.svg"
import img4 from "./logo/linkedin.svg"
import img5 from "./logo/magoosh.svg"
import img6 from "./logo/pluralsight.svg"
import img7 from "./logo/udacity.svg"
import img8 from "./logo/udemy.svg"
import img9 from "./logo/upgrad.svg"

import { Title } from "../../globalStyles"

const useStyles = makeStyles((theme) => ({
  outterdiv: {
    margin: "4% 0",
    [theme.breakpoints.down("1281")]: {
      margin: "2% 0",
    },
  },

  link: {
    textDecoration: "none",
    color: "#E5E5E5",
  },

  innerdi: {
    position: "relative",
    maxWidth: "1150px",
    minHeight: "408px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      minHeight: "308px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "208px",
    },
  },
  iconwarp: {
    background: "rgba(164, 131, 190, 0.5)",
    maxWidth: "943px",
    minHeight: "408px",
    position: "absolute",
    width: "100%",
    left: "9%",
    boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
    [theme.breakpoints.down("1281")]: {
      width: "75%",
      left: "13%",
      minHeight: "354px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "308px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "182px",
    },
  },
  iconediv: {
    maxWidth: "1150px",
    minHeight: "315px",
    position: "absolute",
    background: "#fff",
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    width: "100%",
    top: "11%",
    left: "0%",
    borderRadius: "15px",
    [theme.breakpoints.down("1281")]: {
      width: "85%",
      left: "8%",
      minHeight: "250px",
      height: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "215px",
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "115px",
    },
  },
  innericon: {
    position: "realtive",
  },

  img: {
    width: "150px",
    "&:hover": {
      transform: "scale(1.2)",
    },
    transition: "transform .5s",

    maxWidth: "100%",
    position: "absolute",
    [theme.breakpoints.down("1281")]: {
      width: "115px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      transform: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      transform: "none",
    },
  },

  img1: {
    bottom: "17%",
    right: "5%",
  },
  img2: {
    top: "5%",
    left: "4%",
  },
  img3: {
    top: "20.62%",
    left: "22.89%",
    width: "15%",
    height: "auto",
  },
  img4: {
    top: "16.5%",
    left: "43%",

    width: "18%",
    height: "auto",
  },
  img5: {
    bottom: "0.1%",
    left: "33.82%",
  },
  img6: {
    top: "59%",
    left: "4.5%",
    width: "20%",
    height: "auto",
  },
  img7: {
    top: "55%",
    left: "55.21%",
    width: "17.5%",
    height: "17.5%",
  },
  img8: {
    top: "17%",
    right: "4%",
  },
  img9: {
    top: "1%",
    left: "67%",
  },
  leftline: {
    position: "relative",
    fontWeight: "300 !important",
    "&::before": {
      position: "absolute",
      maxWidth: "353px",
      height: "0px",
      width: "100%",
      left: "6%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      marginTop: "1.8%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        width: "25%",
        marginTop: "2.6%",
        left: "6%",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
        left: "6%",
        marginTop: "1.8%",
      },
    },
    "&::after": {
      position: "absolute",
      maxWidth: "353px",
      width: "100%",
      height: "0px",
      right: "6%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      top: "48%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        width: "25%",
        top: "50%",
        right: "6%",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
        right: "6%",
      },
    },
    margin: "4%",
  },
  topcourse: {
    maxWidth: "100vw",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "15px",
    marginTop: "4.6%",
    marginBottom: "2% ",
  },
  hover: {
    "&:hover": {
      transform: "scale(1.5)",
    },
  },
}))

function Knowprovider() {
  const classes = useStyles()
  return (
    <>
      <Title className={classes.leftline}>Know our Providers</Title>

      <div className={classes.outterdiv}>
        <div className={classes.innerdi}>
          <div className={classes.iconwarp}></div>
          <div className={classes.iconediv}>
            <div className={classes.innericon}>
              <a
                href='/provider-list/codeacademy'
                target='_blank'
                className='hover'
              >
                <img
                  className={classes.hover}
                  src={img1}
                  alt='logos'
                  className={`${classes.img} ${classes.img1}`}
                />
              </a>
              <a href='/provider-list/coursera' target='_blank'>
                <img
                  src={img2}
                  alt='logos'
                  className={`${classes.img} ${classes.img2}`}
                />
              </a>
              <a href='/provider-list/edx' target='_blank'>
                <img
                  src={img3}
                  alt='logos'
                  className={`${classes.img} ${classes.img3}`}
                />
              </a>
              <a href='/provider-list/linkedin-learning' target='_blank'>
                <img
                  src={img4}
                  alt='logos'
                  className={`${classes.img} ${classes.img4}`}
                />
              </a>
              <a href='/provider-list/magoosh' target='_blank'>
                {" "}
                <img
                  src={img5}
                  alt='logos'
                  className={`${classes.img} ${classes.img5}`}
                />
              </a>
              <a href='/provider-list/pluralsight' target='_blank'>
                <img
                  src={img6}
                  alt='logos'
                  className={`${classes.img} ${classes.img6}`}
                />
              </a>
              <a href='/provider-list/udacity' target='_blank'>
                {" "}
                <img
                  src={img7}
                  alt='logos'
                  className={`${classes.img} ${classes.img7}`}
                />
              </a>
              <a href='/provider-list/udemy' target='_blank'>
                <img
                  src={img8}
                  alt='logos'
                  className={`${classes.img} ${classes.img8}`}
                />
              </a>
              <a href='/provider-list/upgrad' target='_blank'>
                <img
                  src={img9}
                  alt='logos'
                  className={`${classes.img} ${classes.img9}`}
                />
              </a>
            </div>
          </div>
        </div>
        <Link to='/provider' className={classes.topcourse}>
          <Button big>Browse all Providers</Button>
        </Link>
      </div>
    </>
  )
}

export default Knowprovider
