import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import img from "./../../assets/img/hero-bg.png";
import { GiSandsOfTime } from "react-icons/gi";
import {
  FaRegEye,
  FaBookmark,
  FaCheckCircle,
  FaRegBookmark,
} from "react-icons/fa";
import ReadOnly from "../StarRating/ReadOnly";
import Dialog from "@material-ui/core/Dialog";
import LoginModal from "../Signup/loginmodal";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  onPutData,
  isLogin,
} from "../../views/apicalling";
import commentAdd from "@iconify-icons/akar-icons/comment-add";
import bxsShareAlt from "@iconify-icons/bx/bxs-share-alt";
import certificateLine from "@iconify-icons/clarity/certificate-line";
import { Icon, InlineIcon } from "@iconify/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "10px",
    height: "45px",
    width: "50px",
    marginBottom: "auto",
    background: "#802BB1",
    borderRadius: "50px",
    color: "#ffff",
    cursor: "pointer",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
}));
export default function AddToCourse({ courseId }) {
  const classes = useStyles();
  const [isAddToCourse, setIsAddToCourse] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  var id;
  if (isLogin()) {
    id = cryptoDecrypt(cookies.get("__sdk")).id;
  }
  useEffect(() => {
    pq();
  }, []);
  const pq = async () => {
    await onPutData("api/user/addToCourse/getData", {
      data: cryptoEncrypt({ user_id: id, course_id: courseId }),
    })
      .then((res) => {
        if (res.data.error == false) {
          setIsAddToCourse(res.data.data.addTocourse);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickAddToHandlerkHandaler = async (e, courseid, flag) => {
    if (isLogin()) {
      await onPutData("api/user/addToCourse", {
        data: cryptoEncrypt({
          user_id: id,
          course_id: courseid,
          ismark: flag === 0 ? true : false,
        }),
      })
        .then((res) => {
          if (res.data.error == false) {
            setIsAddToCourse(res.data.data.addTocourse);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoginModal(true);
    }

    const onClickAddToHandlerkHandaler = async (e, courseid, flag) => {
      if (isLogin()) {
        await onPutData("api/user/addToCourse", {
          data: cryptoEncrypt({
            user_id: id,
            course_id: courseid,
            ismark: flag === 0 ? true : false,
          }),
        })
          .then((res) => {
            if (res.data.error == false) {
              console.log(res.data.data);
              setIsAddToCourse(res.data.data.addTocourse);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setLoginModal(true);
      }
    };
  };

  return (
    <>
      {loginModal == true ? <LoginModal getData={setLoginModal} /> : null}
      {isAddToCourse == true ? (
        <>
          <Icon
            icon={commentAdd}
            data-tip
            data-for="AddToCourse"
            DialogTitle="hello"
            className={classes.btn}
            onClick={(e) => onClickAddToHandlerkHandaler(e, courseId, 1)}
          />
        </>
      ) : (
        <Icon
          icon={certificateLine}
          className={classes.btn}
          onClick={(e) => onClickAddToHandlerkHandaler(e, courseId, 0)}
        />
      )}
    </>
  );
}
