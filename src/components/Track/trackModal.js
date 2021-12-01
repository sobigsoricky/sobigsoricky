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
import LoginModal from "../Signup/loginmodal";
import AlertNofitifation from "../notification/snackbars";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  isLogin,
  onPutData,
} from "../../views/apicalling";
import Cookies from "universal-cookie";
import { BookMark } from "../../components";
import { Icon } from "@iconify/react";
import Trackpopup from "./Trackpopup";
const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    display: "flex",
    height: "auto",
    boxSizing: "border-box",
    minHeight: "250px",
    minWidth: "820px",
    maxHeight: "250px",
    maxWidth: "820px",
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
    maxHeight: "134px",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "15px",
    margin: "20px 0 52px",
    padding: "19px 0 18px 21px",
    cursor: "pointer",

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
    height: "100%",
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
    left: "23%",
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
    margin: "auto",
  },
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
  pop: {
    height: "350px",
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
  notarck: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
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
    background: "#19A8AB",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "auto 0 10px auto",
    },
    "&:hover": {
      background: "var(--primary)",
    },
  },
  dialogPaper: {
    height: "500px",
  },
}));

export default function TrackModal(props) {
  const classes = useStyles();
  const [loginModal, setLoginModal] = useState(false);
  const [AllTrackPathData, setAllTrackPathData] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("default");

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = async () => {
    if (isLogin() == false) {
      setLoginModal(true);
    } else {
      await onPutData("api/user/track/getTrackPath", {
        data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
      })
        .then((res) => {
          if (res.data.error == false) {
            console.log(res.data.data);
            setAllTrackPathData(res.data.data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setOpen(true);
    }
  };
  const onClickAddCourseToTrack = async (trackId, courseId) => {
    await onPutData("api/user/track/addTrackCourse", {
      data: cryptoEncrypt({ trackId: trackId, courseId: courseId }),
    })
      .then((res) => {
        if (res.data.error == false) {
          setOpen(false);
          setNotificationOpen(true);
          setNotificationMessage(res.data.message);
          setNotificationType("success");
        } else {
          setNotificationOpen(true);
          setNotificationMessage(res.data.message);
          setNotificationType("error");
        }
      })
      .catch((error) => {
        setNotificationOpen(true);
        setNotificationMessage("Error");
        setNotificationType("error");
      });
  };
  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen);
    setNotificationMessage(data.message);
    setNotificationType(data.type);
  };
  const setReturn1Data = (data) => {
    if (data == true) {
      if (isLogin() == false) {
        setLoginModal(true);
      } else {
        onPutData("api/user/track/getTrackPath", {
          data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
        })
          .then((res) => {
            if (res.data.error == false) {
              console.log(res.data.data);
              setAllTrackPathData(res.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
        setOpen(true);
      }
    }
  };
  return (
    <>
      {loginModal == true ? <LoginModal getData={setLoginModal} /> : null}
      {notificationOpen === true ? (
        <AlertNofitifation
          isOpen={notificationOpen}
          message={notificationMessage}
          setData={setReturnData}
          type={notificationType}
        />
      ) : (
        ""
      )}
      <Btn className={classes.btn} onClick={() => handleClickOpen(props.id)}>
        Add to Track
      </Btn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{ paper: classes.dialogPaper }}
        className={classes.pop}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            color: "var(--primary)",
            textAlign: "Center",
            padding: "37px 24px",
          }}
        >
          Choose the Track you want to add this course to...
        </DialogTitle>
        <hr
          style={{
            width: "90%",
            margin: "0 auto",
            borderBottomColor: "#B170D7)",
          }}
        />
        <div className={classes.modeloutter}>
          {AllTrackPathData.length > 0 ? (
            AllTrackPathData.map((x, y) => {
              return (
                <div
                  className={classes.card1}
                  onClick={() => onClickAddCourseToTrack(x._id, props.id)}
                >
                  <img src={img} className={classes.img1} alt="course" />

                  <div className={`${classes.section} ${classes.section1}`}>
                    <h2 className={`${classes.cardtitle}`}>
                      {x.track_name.toUpperCase()}
                    </h2>
                    <p className={`${classes.cardp}`}>
                      No. of courses : {x.count}
                    </p>
                    {/* <FaCheckCircle className={classes.check} /> */}
                  </div>
                </div>
              );
            })
          ) : (
            <div className={classes.notarck}>
              <Icon
                icon="ic:baseline-track-changes"
                style={{ fontSize: "75px", color: "#C4C4C4" }}
              />
              <Trackpopup setData={setReturn1Data} />
            </div>
          )}

          {/* <div className={classes.card1}>
                        <img src={img} className={classes.img1} alt="course" />

                        <div className={`${classes.section} ${classes.section1}`}>
                            <h2>PATH NAME</h2>
                            <p>No. of courses : 0</p>
                            <FaCheckCircle  className={classes.check}/>
                        </div>

                    </div> */}
        </div>
      </Dialog>
    </>
  );
}
