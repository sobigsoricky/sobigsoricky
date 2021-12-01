import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import img from "./../../assets/img/hero-bg.png";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegEye, FaBookmark, FaCheckCircle } from "react-icons/fa";
import ReadOnly from "../StarRating/ReadOnly";
import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: "fit-content",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginBottom: "20px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("768")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  card1: {
    display: "flex",
    height: "100%",
    width: "400px",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    margin: "20px 0",
    
    [theme.breakpoints.down("768")]: {
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  modeloutter : {
    margin: "0 auto",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    margin: "20px",
    justifyContent: "center",
    [theme.breakpoints.down("1268")]: {
      marginRight: "5px",
      margin: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: "10px",
      paddingLeft: "10px",
    },
  },
  section1 :{
      position:'relative',
      width:'100%',

  },
  img: {
    width: "165px",
    height: "165px",
    borderRadius: "5px",
    padding: "2px",
  },
  img1: {
    width: "165px",
    height: "165px",
    borderRadius: "5px",
    padding: "15px",
    filter:' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))',
  },
  icon: {
    color: "var(--primary)",
    width: "24px",
    height: "24px",
  },
  type: {},
  typep: {},
  typeh5: {
    color: "var(--primary)",
    fontSize: "22px",
    fontWeight: 800,
  },
  title: {
    fontSize: "24px",
    textDecoration: "none",
    fontWeight: 500,
    color: "#000",
    "&:hover": {
      color: "var(--primary)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
    },
  },
  check : {
      position:'absolute',
      bottom: '1%',
      right:'1%',
      width:'30px',
      height:'30px',
      color:'#9CD751',
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
    marginLeft: 0,
    width: "fit-content",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  btns:{
      display:"inline-block",
      fontSize: "14px",
      padding: "2px 10px",
      height: "fit-content",
      width: "fit-content",
      marginBottom: "auto",
      [theme.breakpoints.down("sm")]: {
        marginTop: " -25px",
        marginBottom: "10px",
      },
  },
  btnadd: {
    background:'#44C6BE !important'
  },
}));

export default function ResourceCard() {
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
        <div className={classes.section}>
          <img src={img} className={classes.img} alt="course" />
          <div className={classes.btn}>
                <Btn className={classes.btnadd}>Add to Track</Btn>
                
            </div>
        </div>

        <div className={classes.iconSec}>
          <div className={classes.icon}>
            {/* <FaRegBookmark/> */}
            <FaBookmark />
          </div>
        </div>
        <div className={classes.section}>
          <Typography>
            <Link to="/product" className={classes.title}>
              Introduction to Data Visualization
            </Link>
          </Typography>
          <Typography className={classes.links}>University Name</Typography>
          <Typography className={classes.links}>Provider name</Typography>
          <div className={classes.iconSec}>
            <div className={classes.icon}>
              <GiSandsOfTime />
            </div>
            <Typography className={classes.links}>Course Duration</Typography>
          </div>
          <div className={classes.iconSec}>
            <div className={classes.icon}>
              <FaRegEye />
            </div>
            <Link className={classes.links}>Course Preview</Link>
          </div>
        </div>
        <div className={classes.ratingSec}>
            <div className={classes.btns}>
                <Btn className={classes.btn1}>Share Course</Btn>
                
            </div>
          <div className={classes.type} mb={2}>
            <p className={classes.typep}>Type:</p>
            <h5 className={classes.typeh5}>FREE</h5>
          </div>
          <ReadOnly />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth="md"
        maxWidth="sm"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ color: "var(--primary)", textAlign: "Center" }}
        >
          Choose the Track you want to add this course to...
          <hr />
        </DialogTitle>
        <div className={classes.modeloutter}>
        <div className={classes.card1}>
          <img src={img} className={classes.img1} alt="course" />

          <div className={`${classes.section} ${classes.section1}`}>
            <h2>PATH NAME</h2>
            <p>No. of courses : 0</p>
            <FaCheckCircle  className={classes.check}/>
          </div>
        </div>

        <div className={classes.card1}>
          <img src={img} className={classes.img1} alt="course" />

          <div className={`${classes.section} ${classes.section1}`}>
            <h2>PATH NAME</h2>
            <p>No. of courses : 0</p>
            {/* <FaCheckCircle  className={classes.check}/> */}
          </div>
          
        </div>
        </div>
       
      </Dialog>
    </>
  );
}
