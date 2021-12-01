import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon_box: {
    width: 50,
    height: 50,
    position: "fixed",
    borderRadius: 50,
    bottom: 70,
    right: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    cursor: "pointer",
    backgroundColor: "#fff",
  },
  icon: { color: "#B170D7", height: 35, width: 35 },
  hidden: { display: "none" },
  box: {
    width: "461px",
    height: "450px",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#fff",
    zIndex: 99,
    borderRadius: 6,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
      width: "80%",
      height: "412px",
      bottom: 120,
    },
  },
  show: {
    display: "block",
    position: "fixed",
    bottom: 80,
    right: 80,

    borderRadius: "10px",
    zIndex: 999,
    [theme.breakpoints.down("sm")]: {
      right: 0,
      bottom: 120,
    },
  },
  upperbox: {
    background: "#DBC1EA",
    borderRadius: "10px 10px 0 0 ",
    minHeight: "164px",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      minHeight: "100px",
    },
  },
  textcenter: {
    textAlign: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 28,
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  mainouter: {
    maxWidth: "240px",
    margin: "0 auto",
  },
  textfield: {
    borderRadius: "40px",
  },
  p: {
    fontSize: "14px",
    color: "#B170D7",
    margin: "6px 0 10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  innerbox: {
    padding: 20,
  },
  link: {
    color: "#808080",
  },
  desdiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  desinnerdiv: {
    display: "flex",
    alignItems: "center",
  },
  icon1: {
    width: "32px",
    height: "32px",
  },
  icon2: {
    margin: "0 10px",
  },
}));

function Help() {
  const [show, SetShow] = useState(false);
  const classes = useStyles();
  const handleClick = () => {
    SetShow(!show);
  };
  return (
    <>
      <div className={classes.icon_box} onClick={handleClick}>
        <Icon
          icon={
            show === true ? "eva:close-fill" : "emojione-monotone:question-mark"
          }
          className={classes.icon}
        />
      </div>
      <div className={show === true ? `${classes.show}` : `${classes.hidden}`}>
        <div className={classes.box}>
          <div className={classes.upperbox}>
            <h4 className={classes.textcenter}>Need Help?</h4>

            <h5>
              You can write to us at{" "}
              <a href="mailto:contactcoursenator@gmail.com">
                contactcoursenator@gmail.com
              </a>{" "}
              for any help, suggestions, feedback, support.
            </h5>
          </div>
          <div className={classes.innerbox}>
            <p className={classes.p}>Featured Blogs</p>
            <Link to="/about" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>About Coursenator</p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
            <Link to="/customizeyourpath" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>Creating course path</p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
            <Link to="/trackgallery" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>What is Track Gallery</p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
            <Link to="/viewtrack" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>Getting started with tracks</p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
            <Link to="/viewtrack" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>All you need to know about tracks</p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
            <Link to="/" className={classes.link}>
              <div className={classes.desdiv}>
                <div className={classes.desinnerdiv}>
                  <Icon icon="codicon:book" className={classes.icon2} />
                  <p className={classes.p}>
                    Sharing achievemnents with your friends
                  </p>
                </div>
                <Icon icon="bx:bx-chevron-right" className={classes.icon1} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Help;
