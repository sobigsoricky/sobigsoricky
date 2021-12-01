import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import img from "./../../assets/img/hero-bg.png";

const useStyles = makeStyles((theme) => ({
  card: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#2D283E",
    zIndex: 1,
    width: "100%",
    maxWidth: "1300px",
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: "50px",
    paddingLeft: "50px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0%",
      paddingRight: "0%",
    },
  },
  article: {
    display: "flex",
    width: 782,
    height: 238,
    border: "0.3px solid white",
    boxSizing: "border-box",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: 20,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "fit-content",
      width: "90vw",
      alignItems: "center",
    },
  },
  section: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  section1: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      margin: 10,
    },
  },
  picture: {
    height: 165,
  },
  articleTitle: {
    fontSize: 24,
    fontWeight: 600,
  },
  pathDetail: {
    color: "#2D283E",
    margin: "10px 0px",
  },
  viewCourse: {
    marginTop: 10,
    display: "flex",
    aligntems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  viewButton: {
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  required: {
    marginTop: "15px",
    color: "#2D283E",
    [theme.breakpoints.down("sm")]: {
      margin: "0px 10px",
      marginTop: 0,
    },
  },
  hr: {
    opacity: "0.2",
  },
}));

export default function RecommandCourseCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.card}>
        <div className={classes.article}>
          <div className={classes.section}>
            <img
              src={
                props.data.track_image != null ? props.data.track_image : img
              }
              className={classes.picture}
              alt={props.data.track_name}
            />
          </div>
          <div className={classes.section1}>
            <Typography className={classes.articleTitle}>
              {props.data.track_name}
            </Typography>

            <Typography className={classes.pathDetail}>
              <div
                dangerouslySetInnerHTML={{ __html: props.data.description }}
              ></div>
            </Typography>
            <hr className={classes.hr} />
            <div className={classes.viewCourse}>
              <Typography className={classes.required}>
                Courses Required : {props.data.count}
              </Typography>
              <Link
                to={`/viewexperttrack?p=${Buffer(props.data._id).toString(
                  "base64"
                )}`}
                className={classes.viewButton}
              >
                <Btn>View Recommended Courses</Btn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
