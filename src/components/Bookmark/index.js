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
import Cookies from "universal-cookie";
const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  bookmark: {
    width: "24px",
    height: "24px",
    marginRight: "7px",
  },
}));

export default function Bookmark({ courseId }) {
  const classes = useStyles();
  const [isBookmark, setIsBookmark] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  var id;
  if (isLogin()) {
    id = cryptoDecrypt(cookies.get("__sdk")).id;
  }
  useEffect(() => {
    pq();
  }, []);
  const pq = async () => {
    await onPutData("api/user/bookmark/getData", {
      data: cryptoEncrypt({ user_id: id, course_id: courseId }),
    })
      .then((res) => {
        if (res.data.error == false) {
          setIsBookmark(res.data.data.bookmark);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickBookmarkHandaler = async (e, courseid, flag) => {
    if (isLogin()) {
      await onPutData("api/user/bookmark", {
        data: cryptoEncrypt({
          user_id: id,
          course_id: courseid,
          ismark: flag === 0 ? true : false,
        }),
      })
        .then((res) => {
          if (res.data.error == false) {
            setIsBookmark(res.data.data.bookmark);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoginModal(true);
    }
  };
  return (
    <>
      {loginModal === true ? <LoginModal getData={setLoginModal} /> : null}
      {isBookmark === true ? (
        <FaBookmark
          onClick={(e) => onClickBookmarkHandaler(e, courseId, 1)}
          className={classes.bookmark}
        />
      ) : (
        <FaRegBookmark
          onClick={(e) => onClickBookmarkHandaler(e, courseId, 0)}
          className={classes.bookmark}
        />
      )}
    </>
  );
}
