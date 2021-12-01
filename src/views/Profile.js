import { CourseCard, NavbarOther, Tab } from "./../components";
import React, { useEffect, useState } from "react";
import { Title, Container } from "./../globalStyles";
import { makeStyles, Typography } from "@material-ui/core";
import anonymous from "./../assets/img/anonymous.png";
import {
  cryptoDecrypt,
  onGetData,
  isLogin,
  onPutData,
  cryptoEncrypt,
  onPostData,
} from "./apicalling";
import Cookies from "universal-cookie";
import { Redirect } from "react-router-dom";
import AlertNofitifation from "../components/notification/snackbars";
import { Newfooter, Offerads } from "../components";

import { FaPen, FaTimes, FaEdit, FaCheck } from "react-icons/fa";
import { Insert1 } from "../components/Signup/SignupElements";
import LoginModal from "../components/Signup/loginmodal";
const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  dp: {
    width: 200,
    height: 200,
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "100px",
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      width: 120,
      height: 120,
    },
  },
  body: {
    maxWidth: "100vw",
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  courseDetails: {
    display: "flex",
    alignItems: "center",
  },
  vr: {
    height: "15px",
    color: "#4B4E54",
    border: "0.5px solid #802BB1",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: "0px 7px",
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
    margin: "10px auto",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  recommend: {
    margin: 20,
    display: "flex",
    width: "1127px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("1025")]: {
      width: "auto",
    },
  },
  recommendTitle: {
    fontSize: "28px",
    color: "var(--primary)",
    fontWeight: "bold",
    textShadow: "4px 4px 20px rgba(0, 0, 0, 0.25);",
    textAlign: "center",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  coursecard: {
    margin: "20px auto 0 0 ",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
    [theme.breakpoints.down("1025")]: {
      width: "90vw",
      margin: "0 ",
    },
  },
  ccard: {
    [theme.breakpoints.down("1025")]: {
      margin: "10px auto",
    },
  },
  profildiv: {
    position: "relative",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  profilimgedit: {
    position: "absolute",
    top: "67%",
    right: "27%",
  },
  profilnameedit: {
    padding: "0 20px",
  },
  pathicon: {
    background: "var(--primary)",
    borderRadius: "50%",
    padding: "2px 5px",
    margin: "0 10px",
    width: "25px",
    height: "25px",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
  icon1: {
    color: "#fff",
    fontSize: "15px",
  },
  input1: {
    height: "31px !important",
    marginBottom: "0px !important",
  },
  pathicon1: {
    margin: "0px -28px !important",
  },
}));

export default function Profile(props) {
  const classes = useStyles();
  const [AllCourseData, setAllCourseData] = useState([]);
  const [AllProfileData, setProfileData] = useState([]);
  const [AllAddToCourseData, setAllAddToCourseData] = useState(0);
  const [isEditName, setIsEditName] = useState(false);
  const [EditName, setEditName] = useState(
    cryptoDecrypt(cookies.get("__sdk")).name
  );
  const [loginModal, setLoginModal] = useState(false);

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("default");

  const inputfile = React.useRef(null);
  const [image, setImage] = useState(null);
  const [imagePre, setImagePre] = useState(null);
  const [isEditImage, setIsEditImage] = useState(false);

  const[loadingData,setLoadingData]=useState(false);

  const onButtonClick = () => {
    setIsEditImage(true);
    inputfile.current.click();
  };
  const handleImage = (event) => {
    let file = event.target.files[0];
    // console.log(file);
    setImage(file);
    setImagePre(URL.createObjectURL(file));
  };
  useEffect(() => {
    onGetData("api/user/course/getDataBySubSubject/all/0")
      .then((res1) => {
        setAllCourseData(res1.data.data);
      })
      .catch((error) => {
        // console.log("Error");
      });
    if (isLogin() == true) {
      onPutData("api/user/addToCourse/getAllData", {
        data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
      })
        .then((res1) => {
          setAllAddToCourseData(res1.data.data.length);
        })
        .catch((error) => {
          // console.log("Error");
        });
      onPutData("api/user/profile/getData", {
        data: cryptoEncrypt({ u: cryptoDecrypt(cookies.get("__sdk")).id }),
      })
        .then((res1) => {
          
          if (res1.data.error == false && res1.data.data !=null) {
            setProfileData(res1.data.data);
            setImagePre(res1.data.data.image_path);
            setLoadingData(true);
          }
        })
        .catch((error) => {
          // console.log("Error");
        });
    }
  }, []);
  const onClickEditNameSubmit = () => {
    if (EditName != null && EditName != "") {
      if (isLogin() == false) {
        setLoginModal(true);
      } else {
        onPostData("api/user/profile/namechange", {
          data: cryptoEncrypt({
            u: cryptoDecrypt(cookies.get("__sdk")).id,
            name: EditName,
          }),
        })
          .then((res) => {
            if (res.data.error == false) {
              cookies.set("token", res.data.token);
              cookies.set("__sdk", res.data.a);
              setNotificationOpen(true);
              setNotificationMessage(res.data.message);
              setNotificationType("success");
              setIsEditName(false);
            }
          })
          .catch((error) => {
            setNotificationOpen(true);
            setNotificationMessage("Name Not Updated");
            setNotificationType("error");
          });
      }
    } else {
      setNotificationOpen(true);
      setNotificationMessage("Enter Valid Name");
      setNotificationType("error");
    }
  };
  const onClickEditImageSubmit = () => {
    if (image != null) {
      if (isLogin() == false) {
        setLoginModal(true);
      } else {
        let data = new FormData();
        var uerId = cryptoEncrypt({
          u: cryptoDecrypt(cookies.get("__sdk")).id,
        });
        data.set("data", uerId);
        data.set("photo", image);
        onPostData("api/user/profile/imageChange", data)
          .then((res) => {
            if (res.data.error == false) {
              setNotificationOpen(true);
              setNotificationMessage(res.data.message);
              setNotificationType("success");
              setIsEditName(false);
              setImagePre(res.data.data.image);
            }
          })
          .catch((error) => {
            setNotificationOpen(true);
            setNotificationMessage("Name Not Updated");
            setNotificationType("error");
          });
      }
    } else {
      setNotificationOpen(true);
      setNotificationMessage("Enter Valid Name");
      setNotificationType("error");
    }
  };
  const onClickEditName = () => {
    setIsEditName(true);
  };
  const onClickEditNameClose = () => {
    setEditName(cryptoDecrypt(cookies.get("__sdk")).name);
    setIsEditName(false);
  };
  const onClickEditImageClose = () => {
    setIsEditImage(false);
    setImagePre(AllProfileData.image_path);
  };
  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen);
    setNotificationMessage(data.message);
    setNotificationType(data.type);
  };
  if (isLogin() == false) {
    return <Redirect to="/login" />;
  } else {
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
        <NavbarOther />
        <Container>
          <div className={classes.body}>
            <Title>Profile</Title>
            {loadingData==true?
            <div className={classes.profildiv}>
              <img
                src={imagePre == null || imagePre === "" ? anonymous : imagePre}
                alt="Display"
                className={classes.dp}
              />
              <input
                type="file"
                id="file"
                onChange={(e) => {
                  handleImage(e);
                }}
                ref={inputfile}
                style={{ display: "none" }}
              />
              {isEditImage == false ? (
                <p
                  className={`${classes.profilimgedit} ${classes.pathicon}`}
                  onClick={onButtonClick}
                >
                  <FaEdit className={classes.icon1} />{" "}
                </p>
              ) : (
                <>
                  <p
                    className={`${classes.profilimgedit} ${classes.pathicon}`}
                    onClick={onClickEditImageSubmit}
                  >
                    <FaCheck className={classes.icon1} />
                  </p>
                  <p
                    className={`${classes.profilimgedit} ${classes.pathicon} ${classes.pathicon1}`}
                    onClick={onClickEditImageClose}
                  >
                    <FaTimes className={classes.icon1} />
                  </p>
                </>
              )}
              <Typography className={classes.name}>
                {isEditName == false ? (
                  <>
                    {EditName}
                    <p
                      className={`${classes.profilnameedit} ${classes.pathicon}`}
                      onClick={onClickEditName}
                    >
                      <FaEdit className={classes.icon1} />
                    </p>
                  </>
                ) : (
                  <>
                    <Insert1
                      placeholder="Name"
                      className={classes.input1}
                      defaultValue={EditName}
                      onChange={(e) => setEditName(e.target.value)}
                      type="text"
                    />
                    <p
                      className={`${classes.profilnameedit} ${classes.pathicon}`}
                      onClick={onClickEditNameSubmit}
                    >
                      <FaCheck className={classes.icon1} />
                    </p>
                    <p
                      className={`${classes.profilnameedit} ${classes.pathicon}`}
                      onClick={onClickEditNameClose}
                    >
                      <FaTimes className={classes.icon1} />
                    </p>
                  </>
                )}
              </Typography>
            </div>
           :''}           
            <div className={classes.courseDetails}>
              <div className={classes.sectionDesktop}>
                <Typography>{AllAddToCourseData} Courses Enrolled</Typography>
                <div className={classes.vr} />
                <Typography>0 Courses Completed</Typography>
                <div className={classes.vr} />
                <Typography>0 Reviews</Typography>
              </div>
              <div className={classes.sectionMobile}>
                <Typography>0 Courses Enrolled</Typography>
                <Typography>0 Courses Completed</Typography>
                <Typography>0 Reviews</Typography>
              </div>
            </div>
            <Tab />
            <div className={classes.recommend}>
              <Typography className={classes.recommendTitle}>
                Courses Recommended for you :
              </Typography>
              <div className={classes.coursecard}>
                {AllCourseData.map((coursecard) => {
                  return (
                    <CourseCard data={coursecard} className={classes.ccard} {...props} />
                  );
                })}
                {/* {[...Array(8)].map(coursecard => {
                                return <CourseCard />
                            })} */}
              </div>
            </div>
          </div>
        </Container>
        <Newfooter />
      <Offerads />
      </>
    );
  }
}
