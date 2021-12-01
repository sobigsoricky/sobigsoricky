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

import DialogTitle from "@material-ui/core/DialogTitle";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  onPutData,
} from "../../views/apicalling";
import Cookies from "universal-cookie";
import { BookMark, TrackModal, AddToCourse } from "../../components";
import { Icon, InlineIcon } from "@iconify/react";
import ShareBtns from "../Share/ShareBtns";
import bxsShareAlt from "@iconify-icons/bx/bxs-share-alt";
import certificateLine from "@iconify-icons/clarity/certificate-line";
import { NoEncryption } from "@material-ui/icons";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    display: "flex",
    height: "auto",
    boxSizing: "border-box",
    maxHeight: "250px",
    minWidth: "800px",
    maxWidth: "95%",

    width: "100%",

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      minWidth: "96vw",
      width: "100%",
      margin: "auto",
    },
    [theme.breakpoints.down("1281")]: {
      minWidth: "90%",
      maxWidth: "90%",
    },

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      maxHeight: "100%",
      maxWidth: "55vw",
      minWidth: "55vw",
    },
    [theme.breakpoints.down("322")]: {
      maxWidth: "71vw",
    },
    [theme.breakpoints.down("1025")]: {
      margin: "10px 4%",
      minWidth: "90%",
      maxWidth: "unset",
      width: "fit-content",
    },
  },
  section_mastring: {
    width: "100%",
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
    maxWidth: "165px",

    justifyContent: "center",
    [theme.breakpoints.down("1268")]: {
      marginRight: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0",
      paddingLeft: "0",
      margin: "20px auto",
    },
  },
  section1: {
    position: "relative",
    width: "100%",
  },
  img: {
    width: "100%",
    maxHeight: "120px",
    height: "100%",

    borderRadius: "5px",
    padding: "2px",
    marginBottom: "7%",
  },
  share: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin: "0 0 auto",
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
    maxWidth: "409px",

    width: "100%",
    padding: "25px",
    [theme.breakpoints.down("md")]: {
      minWidth: "230px",
      width: "100%",
    },
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
    left: "26%",
    cursor: "pointer",
    fontSize: "24px",
    [theme.breakpoints.down("xs")]: {
      right: "2%",
      left: "unset !important",
    },
    [theme.breakpoints.down("1281")]: {
      left: "27%",
    },
    [theme.breakpoints.down("md")]: {
      left: "30%",
    },
    [theme.breakpoints.down("sm")]: {
      left: "26%",
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
    fontSize: "20px",
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
    fontSize: "14px",
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
    padding: "10px",
    height: "45px",
    width: "50px",
    marginBottom: "auto",
    background: "#802BB1",
    borderRadius: "50px",
    color: "#ffff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  desktop: {
    [theme.breakpoints.down("1281")]: {
      width: "99%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  /*mobile css*/
  card_one: {
    position: "relative",
    display: "flex",
    height: "auto",
    boxSizing: "border-box",
    padding: "20px",
    width: "350px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0, 0, 0, 0.2)",

    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
    [theme.breakpoints.down("325")]: {
      width: "260px",
    },
  },
  title_one: {
    color: "black",
    fontWeight: "600",
  },
  trackbtn: {
    display: "flex",
  },
  trackbtn1: {
    marginLeft: "auto",
  },
}));

export default function CourseCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [imgLoad, seImgLoad] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickBookmarkHandaler = async (e, courseid, flag) => {
    const { id } = cryptoDecrypt(cookies.get("__sdk"));

    await onPutData("api/user/bookmark", {
      data: cryptoEncrypt({
        user_id: id,
        course_id: courseid,
        ismark: flag === 0 ? true : false,
      }),
    })
      .then((res) => {
        if (res.data.error == false) {
          setIsBookmark(flag === 0 ? true : false);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const {
    _id,
    course_image_url,
    course_name,
    providerName,
    universityName,
    course_slug,
    course_paid_or_free,
    course_duration,
    course_rating,
  } = props.data;

  return (
    <>
      <div className={classes.desktop}>
        <div className={classes.card}>
          <div className={classes.section}>
            <img
              style={imgLoad ? {} : { display: "none" }}
              onLoad={() => seImgLoad(true)}
              src={course_image_url}
              className={classes.img}
              alt="course"
            />
            <img
              style={imgLoad == false ? {} : { display: "none" }}
              src={props.data.providerName[0].image_path}
              className={classes.img}
              alt="course"
            />
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
            <Typography className={classes.links}>
              Provider : {providerName[0].name}
            </Typography>
            <div className={classes.iconSec}>
              <div className={classes.icon1}>
                <GiSandsOfTime />
              </div>
              <Typography className={classes.links}>
                {course_duration}
              </Typography>
            </div>
            <div className={classes.iconSec}>
              <div className={classes.icon1}>
                <Icon icon={barChartLine} />
              </div>
              {props.data.course_level ? props.data.course_level : ""}
            </div>
          </div>
          <div className={classes.ratingSec}>
            <div className={classes.share}>
              <AddToCourse courseId={_id} />
              <ShareBtns {...props} />
              {/* <Link to="#"> 
                <Icon className={classes.btn} icon={bxsShareAlt} />
              </Link> */}
            </div>
            <div className={classes.type} mb={2}>
              <p className={classes.typep}>Type:</p>
              <h5 className={classes.typeh5}>
                {course_paid_or_free.toUpperCase()}
              </h5>
            </div>
            <ReadOnly data={course_rating} />
          </div>
        </div>
      </div>
      <div className={classes.mobile}>
        <div className={classes.card_one}>
          <div className={classes.section_mastring}>
            <Link to={`/product/${course_slug}`} className={classes.title_one}>
              {course_name}
            </Link>
            <Typography className={classes.links}>
              {universityName[0].name}
            </Typography>
            <div className={classes.section_mastring_ico}>
              <div className={classes.iconSec}>
                <div className={classes.icon1}>
                  <GiSandsOfTime />
                </div>
                <Typography className={classes.links}>
                  {course_duration}
                </Typography>
              </div>
              <div className={classes.iconSec}>
                <div className={classes.icon1}>
                  <Icon icon={barChartLine} />
                </div>
                {props.data.course_level ? props.data.course_level : ""}
              </div>
              <div className={classes.trackbtn}>
                <TrackModal id={_id} className={classes.trackbtn1} />
              </div>
            </div>
          </div>
          <div className={classes.section_two}>
            <div>
              <div className={classes.icon}>
                <BookMark courseId={_id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
