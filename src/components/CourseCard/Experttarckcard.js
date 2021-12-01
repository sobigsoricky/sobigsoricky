import { makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import img from "./../../assets/img/hero-bg.png";
import { GiSandsOfTime } from "react-icons/gi";
import {
  FaRegEye,
  FaBookmark,
  FaRegBookmark,
  FaCheckCircle,
} from "react-icons/fa";
import ReadOnly from "../StarRating/ReadOnly";
import Dialog from "@material-ui/core/Dialog";
import barChartLine from "@iconify/icons-bi/bar-chart-line";
import { Icon, InlineIcon } from "@iconify/react";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  onPutData,
} from "../../views/apicalling";
import Cookies from "universal-cookie";
import SharebtnExpert from "../Share/ShareBtnsExperts";
import { BookMark, TrackModal } from "../../components";
const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    display: "flex",
    height: "auto",
    boxSizing: "border-box",
    minWidth: "763px",
    maxHeight: "250px",
    maxWidth: "80%",
    width: "auto",
    // justifyContent: 'space-between',
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      minWidth: "98vw",
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxHeight: "100%",
      maxWidth: "55vw",
      minWidth: "55vw",
      margin: "10px auto",
    },
    [theme.breakpoints.down("322")]: {
      maxWidth: "71vw",
    },
  },
  card1: {
    display: "flex",
    height: "100%",
    width: "100%",
    minWidth: "395px",
    minHeight: "134px",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    margin: "20px 0 52px",
    padding: "19px 0 18px 21px",

    [theme.breakpoints.down("768")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  modeloutter: {
    margin: "0 auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 20px 9px",
    minWidth: "165px",
    width: "165px",
    height: "165px",
    maxWidth: "165px",

    justifyContent: "center",
    [theme.breakpoints.down("1268")]: {
      marginRight: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  section1: {
    position: "relative",
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "5px",
    padding: "2px",
    marginBottom: "7%",
  },
  img1: {
    width: "140px",
    height: "95px",
    borderRadius: "5px",

    filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
  },
  cardtitle: {
    fontFamily: "Sora",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#4B4E54",
  },
  coursename: {
    minWidth: "409px",

    width: "100%",
    padding: "25px",

    [theme.breakpoints.down("xs")]: {
      minWidth: "230px",
      width: "100%",
    },
  },
  cardp: {
    fontFamily: "Sora",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#4B4E54",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  icon: {
    position: "absolute",
    color: "var(--primary)",
    width: "24px",
    height: "24px",
    top: "0",
    left: "25%",
    cursor: "pointer",
    fontSize: "20px",
    [theme.breakpoints.down("xs")]: {
      right: "0",
      left: "unset",
    },
  },
  icon1: {
    color: "var(--primary)",
    padding: "0 7px 0 0",
    top: "0",
    left: "23%",
    fontSize: "20px",
  },
  type: {
    marginBottom: "auto",
  },
  typep: {},
  typeh5: {
    color: "var(--primary)",
    fontSize: "22px",
    fontWeight: 800,
  },
  title: {
    fontSize: "20px",
    textDecoration: "none",
    fontWeight: 500,
    color: "#000",
    "&:hover": {
      color: "var(--primary)",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "17px",
    },
  },
  check: {
    position: "absolute",
    bottom: "1%",
    right: "1%",
    width: "30px",
    height: "30px",
    color: "#9CD751",
  },
  links: {
    textDecoration: "none",
    color: "var(--grey)",
    marginBottom: "5px",
    "&:hover": {
      color: "var(--primary)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  iconSec: {
    display: "flex",
  },

  ratingSec: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    marginLeft: "auto",
    width: "fit-content",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0px",
      margin: "auto",
    },
  },
  btn: {
    fontSize: "14px",
    padding: "2px 10px",
    height: "fit-content",
    width: "fit-content",
    marginBottom: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  none: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function Experttrackcard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    _id,
    course_image_url,
    course_name,
    providerName,
    universityName,
    course_slug,
    course_level,
    course_paid_or_free,
    course_duration,
    course_rating,
  } = props.data[0];

  return (
    <>
      <div className={classes.card}>
        <div className={classes.section}>
          <img src={course_image_url} className={classes.img} alt="course" />
          <TrackModal id={_id} />
        </div>
        <div className={classes.icon}>
          <BookMark courseId={_id} />
        </div>
        <div className={classes.coursename}>
          <Link to={`/product/${course_slug}`} className={classes.title}>
            {course_name}
          </Link>
          <Typography className={classes.links}>
            {universityName[0].name}
          </Typography>
          <Typography className={`${classes.links} ${classes.none}`}>
            Provider : {providerName[0].name}
          </Typography>
          <div className={classes.iconSec}>
            <div className={classes.icon1}>
              <GiSandsOfTime />
            </div>
            <Typography className={classes.links}>{course_duration}</Typography>
          </div>
          <div className={classes.iconSec}>
            <div className={classes.icon1}>
              <Icon icon={barChartLine} />
            </div>
            {course_level}
          </div>
        </div>
        <div className={classes.ratingSec}>
          <SharebtnExpert {...props} />

          <div className={`${classes.type} ${classes.none}`} mb={2}>
            <p className={`${classes.typep}`}>Type:</p>
            <h5 className={classes.typeh5}>
              {course_paid_or_free.toUpperCase()}
            </h5>
          </div>
          <p className={classes.none}>
            <ReadOnly data={course_rating} />
          </p>
        </div>
      </div>
    </>
  );
}
