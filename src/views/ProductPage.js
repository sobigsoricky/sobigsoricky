import { BreadCrumb, NavbarOther, Btn } from "../components"
import React, { useEffect, useState } from "react"
import { SearchBar } from "../components/HeroSection/HeroSecElements"
import {
  Button,
  ButtonGroup,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core"
import { Icon, InlineIcon } from "@iconify/react"
import { Newfooter, Offerads } from "../components"

import { Title } from "../globalStyles"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import TextField from "@material-ui/core/TextField"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import barChartLine from "@iconify/icons-bi/bar-chart-line"

import ShareIcon from "@material-ui/icons/Share"
import CastForEducationIcon from "@material-ui/icons/CastForEducation"
import LanguageIcon from "@material-ui/icons/Language"
import { FaAward } from "react-icons/fa"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"
import DateRangeIcon from "@material-ui/icons/DateRange"
import clsx from "clsx"
import styled from "styled-components"
import anonymous from "./../assets/img/anonymous.png"
import ReadOnly from "./../components/StarRating/ReadOnly"
import Otherrating from "./../components/StarRating/Otherratilng"
import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"
import Pristine from "./../components/StarRating/Pristine"
import img from "./../assets/img/logo-placeholder.png"
import CircularProgress from "@material-ui/core/CircularProgress"
import { BookMark, Loading } from "../components"
import ShareBtnProduct from "../components/Share/ShareBtnsProduct"
import AlertNofitifation from "../components/notification/snackbars"
import {
  cryptoDecrypt,
  cryptoEncrypt,
  isLogin,
  onGetData,
  onPostData,
  onPutData,
  googleAnalyticsAction,
} from "./apicalling"
import Cookies from "universal-cookie"
import Helmet from "react-helmet"
const cookies = new Cookies()

const Line = styled.hr`
  width: 300px;
  opacity: 0.2;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
const StyledRating = withStyles((theme) => ({
  iconFilled: {
    color: "#fff",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
  },
  iconHover: {
    color: "var(--primary)",
  },
  root: {
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "21px",
    },
  },
}))(Rating)
function Buttongroup(props) {
  useEffect(() => {
    googleAnalyticsAction()
  }, [])
  const classes = useStyles()
  return (
    <>
      <ButtonGroup className={classes.btngrp}>
        <Button>
          <Typography className={classes.ratingIcon}>0</Typography>
        </Button>
        <Button>
          <BookmarkIcon className={classes.ratingIcon} />
        </Button>
        <Button>
          <ShareIcon className={classes.ratingIcon} />
        </Button>
      </ButtonGroup>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "2%",
    marginRight: "5%",
    marginTop: "100px",
    maxWidth: "100vw",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "3%",
      marginRight: "3%",
    },
  },
  sectionDesktop: {
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("768")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("768")]: {
      display: "flex",
    },
  },
  desktop: {
    display: "flex",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    fontSize: "27px !important",
  },

  btngrp: {
    marginRight: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
      width: "80vw",
    },
  },
  breadcrumb: {
    display: "flex",
    marginRight: "auto",
  },
  search: {
    display: "flex",
    maxWidth: "90vw",
    alignItems: "center",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "100vw",
    width: "100%",
    [theme.breakpoints.down("sm")]: {},
  },
  titleSubsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: "auto",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      marginBottom: "25px",
    },
  },
  university: {
    color: "var(--grey)",
    marginTop: "5px",
    marginBottom: "5px",
  },
  ratingSection: {
    display: "flex",
    alignItems: "flex-start",
    marginRight: "1%",
    marginLeft: "1%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginRight: "55%",
    },
  },
  ratingSubsection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "25px",
    marginTop: "5px",
  },
  ratingLinks: {
    textDecoration: "none",
    color: "var(--primary)",
    display: "flex",
    alignItems: "center",
  },
  ratingIcon: {
    width: "24px",
    height: "24px",
    marginRight: "7px",
    color: "var(--primary)",
  },
  overviewSection: {
    display: "flex",
    width: "100%",
    marginRight: "auto",
    paddingLeft: "5px",
    paddingRight: "5px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
      marginRight: "0px",
    },
  },
  overviewSubsection: {
    marginLeft: "35px",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0px",
      marginBottom: "25px",
      marginLeft: "0px",
    },
  },
  detailSection: {
    marginTop: "5px",
    marginBottom: "10px",
    display: "flex",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  },
  detailSubsection: {
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
  },
  course: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    justifyContent: "center",
    marginLeft: "auto",
    width: "fit-content",

    borderRadius: 15,
    [theme.breakpoints.up("lg")]: {
      margin: "-39% 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
  coursecard: {
    textDecoration: "none",
    color: "#000",
    marginRight: "auto",
    margin: "6px 0px ",
    padding: "5px",
    display: "flex",
  },
  prolink: {
    marginTop: 25,
  },
  btn: {
    marginTop: 20,
    marginLeft: "25%",
    marginBottom: -10,
  },
  subdata: {
    display: "flex",
    width: "50%",
    flexDirection: "column",
    marginBottom: "25px",
    padding: "0 10px",
    [theme.breakpoints.down("md")]: {
      marginRight: "110px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
      marginTop: "10px",
      marginRight: "0px",
      alignItems: "center",
    },
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
  writereview: {
    marginRight: "auto",
    width: "750px",
    height: "fit-content",
    background: "#FFFFFF",
    border: "0.5px solid #802BB1",
    boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    padding: 25,
    marginLeft: 0,
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: "fit-content",
    },
  },
  showreview: {
    marginRight: "auto",
    width: "750px",
    height: "fit-content",
    border: "0.5px solid rgba(0, 0, 0, 0.5)",
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    padding: 25,
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      height: "fit-content",
    },
  },
  reviewtext: {
    color: "#4B4E54",
  },
  reviewname: {
    fontWeight: 600,
    color: "#5C0090",
    marginBottom: 10,
  },
  subdata1: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "baseline",
    },
  },
  reviewtitle: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  input: {
    display: "flex",
    marginTop: "5%",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "55ch",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "block",
      "& .MuiTextField-root": {
        width: "100%",
      },
    },
  },
  overviewSection1: {
    width: "83%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "row",
      alignItems: "unset",
    },
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "unset",
    },
  },
  review: {
    display: "flex",
    fontSize: "27px !important",
    margin: "10px 0 15px 0 !important",
  },
  postbtn: {
    marginLeft: "auto",
  },
  coursetext: {
    marginLeft: 15,
  },
  icon: {
    width: 22.5,
    height: 22.5,
  },
  ratingsection2: {
    display: "flex",
    color: "#000",
    margin: "0 0 4%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  reviews: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    padding: "22px 50px 0",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      marginLeft: "0",
    },
  },
  textfield: {},
  comment: {
    width: "550px",

    color: "var(--grey)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "fit-content",
      fontSize: "14px",
    },
  },
  dp: {
    width: "95px",
    height: "95px",
    borderRadius: "50px",
    border: "0.5px solid rgba(0, 0, 0, 0.2)",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "50px",
    },
  },
  inputlabel: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: "-1px",
  },
  reviewSection: {
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
  },
  load: {
    display: "flex",
    marginLeft: "40%",
    marginBottom: "5%",
  },
  month: {
    color: "#1A2237",
    marginLeft: "6%",
    fontSize: "16px",
    fontWeight: "600",
  },
  img: {
    width: "180px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  desktop2: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  rating: {
    margin: "15% 0",
  },
  oversub: {
    marginLeft: "0px",
  },
  uppertext: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "25px",
    padding: "8px 51px 20px 28px",
    color: " #777777",

    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      lineHeight: 1.4,
    },
  },
  uppertextdiv: {
    width: "674px",
    marginRight: "auto",
    marginTop: "17px",
    height: "60px",
    background: "rgba(242, 241, 241, 0.69)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "80px",
    },
  },
  bg: {
    background: "#AFAFAF",
    padding: "2px 5px",
    borderRadius: "5px",
  },
  bookmark: {
    width: "24px",
    height: "24px",
    marginRight: "7px",
  },
}))

export default function ProductPage(props) {
  const classes = useStyles()
  const [AllCourseData, setAllCourseData] = useState([])
  const [CourseProvider, setCourseProvider] = useState([])
  const [CourseUniersity, setCourseUniersity] = useState([])
  const [CourseSubject, setCourseSubject] = useState([])
  const [CourseSubSubject, setCourseSubSubject] = useState([])
  const [CourseLanguage, setCourseLanguage] = useState([])
  const [loadingData, setLoadingData] = useState(true)
  const [RetingValue, setRetingValue] = useState(0)
  const [RatingDescription, setRatingDescription] = useState("")

  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("default")
  const [loadingbtn, setloadingbtn] = useState(false)

  const [AllRatingData, setRatingData] = useState([])

  useEffect(() => {
    onGetData("api/user/course/getDataBySlug/" + props.match.params.slug)
      .then((res) => {
        console.log(res.data.data[0])
        setAllCourseData(res.data.data[0])
        setCourseProvider(res.data.data[0].providerName[0])
        setCourseUniersity(res.data.data[0].universityName[0])
        setCourseSubject(res.data.data[0].SubjectName[0])
        setCourseLanguage(res.data.data[0].LanguageName[0])
        setCourseSubSubject(res.data.data[0].SubSubjectName[0])
        setLoadingData(false)
        onPutData("api/user/coursereview/getAllData/10/0", {
          data: cryptoEncrypt({ cid: res.data.data[0]._id }),
        })
          .then((res1) => {
            if (res1.data.error == false) {
              setRatingData(res1.data.data)
              console.log(res1.data.data)
            }
          })
          .catch((error1) => {
            console.log(error1)
          })
      })
      .catch((error) => {
        console.log("Error")
      })
  }, [])
  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen)
    setNotificationMessage(data.message)
    setNotificationType(data.type)
  }
  const onPostReviewClick = () => {
    setloadingbtn(true)
    if (isLogin()) {
      onPutData("api/user/coursereview", {
        data: cryptoEncrypt({
          user_id: cryptoDecrypt(cookies.get("__sdk")).id,
          course_id: AllCourseData._id,
          description: RatingDescription,
          rating: RetingValue,
        }),
      })
        .then((response) => {
          if (response.data.error === false) {
            setloadingbtn(false)
            setNotificationOpen(true)
            setNotificationMessage(response.data.message)
            setNotificationType("success")

            onPutData("api/user/coursereview/getAllData/10/0", {
              data: cryptoEncrypt({ cid: AllCourseData._id }),
            })
              .then((res1) => {
                if (res1.data.error == false) {
                  setRatingData(res1.data.data)
                  console.log(res1.data.data)
                }
              })
              .catch((error1) => {
                console.log(error1)
              })
          } else {
            setloadingbtn(false)
            setNotificationOpen(true)
            setNotificationMessage(response.data.message)
            setNotificationType("error")
          }
        })
        .catch((error) => {
          setloadingbtn(false)
          setNotificationOpen(true)
          setNotificationMessage("Error")
          setNotificationType("error")
        })
    } else {
      setloadingbtn(false)
      setNotificationOpen(true)
      setNotificationMessage("Login First")
      setNotificationType("warning")
    }
  }
  return (
    <>
      <NavbarOther />
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

      <div className={classes.root}>
        <div className={classes.breadcrumb}>
          <BreadCrumb />
        </div>
        {/* <div className = {classes.search}>
                    <SearchBar placeholder =  "Search thousands of course"/>
                    <Btn>Search</Btn>
                </div> */}
        <div className={classes.uppertextdiv}>
          <p className={classes.uppertext}>
            Coursenator is learner-supported. When you buy courses through links
            on our Site, we may earn an affiliate commission.
          </p>
        </div>
        {loadingData == true ? (
          <Loading name='Course details' />
        ) : (
          <>
            <Helmet>
              <title>{AllCourseData.course_name} | Free Course</title>
              <meta
                name='description'
                content={`Learn ${AllCourseData.course_name} with Coursenator!`}
              />
            </Helmet>
            <div className={classes.titleSection}>
              <div className={classes.titleSubsection}>
                <Title className={classes.title}>
                  {AllCourseData.course_name}
                </Title>
              </div>
              <div className={classes.university}>
                {/* <BreadCrumb /> */}
                Provider : {CourseProvider.name}
              </div>
              <div className={classes.ratingSection}>
                <div className={classes.ratingSubsection}>
                  <Otherrating data={parseInt(AllCourseData.course_rating)} />
                </div>
                <div className={classes.sectionDesktop}>
                  <div className={classes.ratingSubsection}>
                    <Link className={classes.ratingLinks}>0 reviews</Link>
                  </div>
                  <div className={classes.ratingSubsection}>
                    <Link className={classes.ratingLinks}>
                      <BookMark
                        courseId={AllCourseData._id}
                        className={classes.bookmark}
                      />
                      {/* <BookmarkIcon className={classes.ratingIcon} /> */}
                      Bookmarks
                    </Link>
                  </div>
                  <div className={classes.ratingSubsection}>
                    <ShareBtnProduct {...props} />
                    {/* <Link className={classes.ratingLinks}>
                      <ShareIcon className={classes.ratingIcon} />
                      Share Course
                    </Link> */}
                  </div>
                  <div className={clsx(classes.logo, classes.desktop)}>
                    <Typography>Offered by :</Typography>
                    <img
                      src={CourseProvider.image_path}
                      className={classes.img}
                      alt='Logo'
                    />
                  </div>
                </div>
                <div className={classes.sectionMobile}>
                  <Buttongroup />
                </div>
              </div>
            </div>
            <div className={classes.overviewSection}>
              <div
                className={clsx(classes.overviewSubsection, classes.oversub)}
              >
                <Typography variant='h4'>Overview</Typography>
                <Typography className={classes.detailSection}>
                  {AllCourseData.course_description}
                </Typography>
              </div>
              <div className={classes.overviewSubsection}>
                <div className={classes.course}>
                  <ReactPlayer
                    muted={true}
                    controls={true}
                    width={"300px"}
                    height={"150px"}
                    url={AllCourseData.course_video_link}
                  />
                  <Link
                    to={`/redirect?q=${Buffer(
                      AllCourseData.course_link
                    ).toString("base64")}`}
                    rel='sponsored'
                    target={"_blank"}
                  >
                    <Btn className={classes.btn}>Go to course</Btn>
                  </Link>

                  <Link className={classes.coursecard}>
                    <CastForEducationIcon className={classes.prolink} />
                    <Typography
                      className={clsx(classes.coursetext, classes.prolink)}
                    >
                      {CourseProvider.name}
                    </Typography>
                  </Link>
                  <Line />

                  <div className={classes.coursecard}>
                    <LanguageIcon className={classes.icon} />
                    <Typography className={classes.coursetext}>
                      {" "}
                      {CourseLanguage.name}
                    </Typography>
                  </div>
                  <Line />
                  <div className={classes.coursecard}>
                    <FaAward className={classes.icon} />
                    <Typography className={classes.coursetext}>
                      {AllCourseData.course_certificate}
                    </Typography>
                  </div>
                  <Line />

                  <div className={classes.coursecard}>
                    <HourglassFullIcon className={classes.icon} />
                    <Typography className={classes.coursetext}>
                      {AllCourseData.course_duration}
                    </Typography>
                  </div>
                  <Line />
                  <div className={classes.coursecard}>
                    <DateRangeIcon className={classes.icon} />
                    <Typography className={classes.coursetext}>
                      {AllCourseData.course_start_date}
                    </Typography>
                  </div>
                  <Line />
                  <div className={classes.coursecard}>
                    {/* <DateRangeIcon className={classes.icon} /> */}
                    <Icon icon={barChartLine} className={classes.icon} />

                    <Typography className={classes.coursetext}>
                      {AllCourseData.course_level}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${classes.overviewSection} ${classes.overviewSection1}`}
            >
              <div className={classes.subdata}>
                <Typography className={classes.bold}>
                  Course taught by:
                </Typography>
                <Typography className={classes.normal}>
                  {AllCourseData.course_teacher}
                </Typography>
              </div>
              <div className={classes.subdata}>
                <Typography className={classes.bold}>Subject</Typography>
                <Typography className={classes.normal}>
                  {CourseSubject.name}
                </Typography>
              </div>
              <div className={`${classes.subdata} ${classes.subdata1}`}>
                <Typography className={classes.bold}>Sub-Subject</Typography>
                <Typography className={classes.normal}>
                  {CourseSubSubject.name}
                </Typography>
              </div>
            </div>
          </>
        )}
        <div className={classes.reviewSection}>
          <Title style={{ marginRight: "auto" }} className={classes.review}>
            Review
          </Title>
          <div className={classes.writereview}>
            <div className={classes.reviewtitle}>
              <Typography className={classes.reviewtext}>
                Provide your review for the course &nbsp;
              </Typography>
              <Typography className={classes.reviewname}>
                Course Name
              </Typography>
            </div>
            {/* <Pristine /> */}
            <>
              <form className={classes.input}>
                <Typography className={classes.inputlabel}>
                  Add a comment
                  <div className={classes.rating}>
                    <Box component='fieldset' borderColor='transparent'>
                      <StyledRating
                        onChange={(event, newValue) => {
                          if (newValue != null) {
                            setRetingValue(newValue)
                          }
                        }}
                        name='hover-feedback'
                        className={classes.bg}
                        value={RetingValue}
                        precision={0.5}
                      />
                    </Box>
                  </div>
                </Typography>
                <TextField
                  id='review'
                  label='Review'
                  multiline
                  rows={2}
                  variant='outlined'
                  onChange={(e) => setRatingDescription(e.target.value)}
                  className={classes.textfield}
                />
              </form>
            </>
            {loadingbtn == true ? (
              <center>
                <CircularProgress />
              </center>
            ) : (
              <Btn
                onClick={() => onPostReviewClick()}
                className={classes.postbtn}
              >
                Post
              </Btn>
            )}
          </div>
          {AllRatingData.map((x, y) => {
            return (
              <div className={classes.showreview}>
                <>
                  <img
                    src={anonymous}
                    className={clsx(classes.dp, classes.desktop2)}
                    alt=''
                  />
                </>
                <div className={classes.reviews}>
                  <div className={classes.ratingsection2}>
                    <img
                      src={anonymous}
                      className={clsx(classes.dp, classes.mobile)}
                      alt=''
                    />
                    <Otherrating rate={x.rating} />

                    <Typography className={classes.month}>
                      a month ago
                    </Typography>
                  </div>
                  <Typography className={classes.comment}>
                    {x.description}
                  </Typography>
                </div>
              </div>
            )
          })}
          <Link className={classes.load}>Load more</Link>
        </div>
      </div>
      <Newfooter />
      <Offerads />
    </>
  )
}
