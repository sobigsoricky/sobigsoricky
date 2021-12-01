import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import img from ".../../../public/Group-20.webp";
import { Button, Title } from "./../../globalStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ReadBlog = styled(Button)`
  padding: 12px 65px;
  @media screen and (max-width: 1320px) {
    padding: 12px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 8px 70px;
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    maxHeight: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  title: {
    fontWeight: "300 !important",
    textAlign: "left",
  },
  section: {
    display: "flex",
    margin: "80px 40px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("1281")]: {
      margin: "65px 40px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 20,
    },
  },

  section1: {
    maxWidth: "680px",
  },
  img: {
    width: 550,
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
      marginTop: "20px",
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
  },
  textbold: {
    textAlign: "left",
    marginTop: "6%",
    marginBottom: "25px",
    fontSize: "20px",
    lineHeight: "27px",
    color: "var(--grey)",
    width: "80%",
    textShadow: "5px 4px 4px rgba(0, 0, 0, 0.12)",
    fontWeight: 600,
    [theme.breakpoints.down("1281")]: {
      fontSize: "18px",
    },
  },
  text: {
    textAlign: "left",
    maxWidth: "550px",
    marginBottom: "25px",
    fontSize: "20px",
    lineHeight: "27px",
    color: "#000",
    [theme.breakpoints.down("1281")]: {
      fontSize: "18px",
    },
  },
  row: {
    display: "flex",
    margin: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  btn: {
    width: "273px",
    margin: 10,
    [theme.breakpoints.down("1281")]: {
      width: "230px",
    },
  },
  btn2: {
    padding: "10px 55px",
  },
  btnlink: {
    textDecoration: "none",
    color: "inherit",
  },
}));
function AboutLanding() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.section} ${classes.section1}`}>
          <Title className={classes.title}>What does Coursenator do ?</Title>
          <Typography className={classes.textbold}>
            <span style={{ color: "#000" }}>Coursenator</span> aggregates
            courses from the best online learning platforms like Coursera, edX,
            FutureLearn, Udacity, and 20 others.
          </Typography>
          <Typography className={classes.text}>
            Browse from thousands of indexed courses from the best providers.
            All in one catalogue. Search by Subjects, providers, universities,
            institutes, level, duration, start date and learning type. See our
            list of curated courses handpicked by our team of MOOC enthusiasts.
          </Typography>
          <div className={classes.row}>
            <Button blue big className={classes.btn}>
              <Link className={classes.btnlink} to="/catalog">
                Explore Catalogue
              </Link>
            </Button>
            <Button blue big className={`${classes.btn} ${classes.btnm}`}>
              <Link className={`${classes.btnlink} `} to="/blogs">
                Read Blogs
              </Link>
            </Button>
          </div>
        </div>
        <div className={`${classes.section} ${classes.section2}`}>
          <img className={classes.img} src={img} alt="logos" />
        </div>
      </div>
    </>
  );
}

export default AboutLanding;
