import React from "react";
import img from "./offerads.png";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imgdiv: {
    background: `linear-gradient(0deg, #EADEF1, #EADEF1);`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "40px",
    margin: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    bottom: 0,
    zIndex: 99,
    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
  span: {
    fontFamily: "inherit",
    fontSize: "1em",
    color: "var(--primary)",
    fontWeight: "bold",
  },
  link: {
    fontFamily: "inherit",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      padding: "0 10px",
    },
  },
  viewmore: {
    fontFamily: "inherit",
    fontSize: "1em",
    marginLeft: 20,
    textDecoration: "underline",
  },
}));

function Offerads() {
  const classes = useStyles();

  return (
    <div className={classes.imgdiv}>
      <p className={classes.link}>
        Get upto <span className={classes.span}>75%</span> off on Udacity
        Nanodegree Programs{" "}
        <Link to="/discount" className={classes.viewmore}>
          View all offers
        </Link>{" "}
      </p>
    </div>
  );
}

export default Offerads;
