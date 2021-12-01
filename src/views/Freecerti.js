import React, { useEffect, useState } from "react"
import { CourseCard, Loading, NavbarOther, Share } from "../components"
import img from "../assets/img/free.webp"
import { makeStyles } from "@material-ui/core/styles"
import { Title } from "../globalStyles"
import { Grid, Typography } from "@material-ui/core"
import { Icon, InlineIcon } from "@iconify/react"
import aiStatusComplete from "@iconify-icons/carbon/ai-status-complete"
import certificateCheck from "@iconify-icons/carbon/certificate-check"
import shareAlt from "@iconify-icons/el/share-alt"
import { onGetData } from "./apicalling"
import { Link } from "react-router-dom"
import bxsRightArrow from "@iconify-icons/bx/bxs-right-arrow"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { CircularProgress } from "@material-ui/core"
import Helmet from "react-helmet"
import { Newfooter, Offerads } from "../components"
import { googleAnalyticsAction } from "./apicalling"

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    margin: "6% 0 0 ",
    padding: "100px 0 74px 0 ",
    background: `url(${img})`,
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  title: {
    fontSize: "60px !important",
    fontWeight: "600 !important",
    color: "var(--white) !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px !important",
    },
  },
  pra: {
    color: "var(--white) ",
    fontSize: "20px",
    textAlign: "center",
    fontWeight: "300 ",
    padding: "0 241px",
  },
  cardoutter: {
    margin: "2% auto",
    overflow: "hidden",
    width: "63%",
    [theme.breakpoints.down("1025")]: {
      width: "100%",
    },
  },
  desktop: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      maxWidth: 351,
      margin: "3% auto !important",
    },
  },
  item: {
    [theme.breakpoints.down("sm")]: {
      margin: "3% auto !important",
    },
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "66% !important",
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      width: "100% !important",
    },
  },
  container1: {
    margin: "0 5%",
    [theme.breakpoints.down("md")]: {
      width: "66% !important",
      margin: "0 auto",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 3%",
    },
    [theme.breakpoints.down("597")]: {
      margin: "0 auto",
    },
  },
  card: {
    minWidth: "258px",
    width: "60%",
    minHeight: "140px",
    height: "100%",
    border: " 1px solid #CA98E8",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      minWidth: "210px",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
      margin: "auto",
    },
  },
  icon: {
    width: "37px",
    height: "34px",
    color: "#CA98E8",
  },
  iconp: {
    fontWeight: "300",
    fontSize: "20px",
    color: "#802BB1",
    marginTop: 23,
    maxWidth: 211,
    textAlign: "center",
    lineHeight: "27px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },

  fillter: {
    maxWidth: 351,
    width: "100%",
    boxShadow: "4px 10px 20px rgba(0, 0, 0, 0.25)",
  },
  fillterlink: {
    fontWeight: "300",
    fontSize: "18px",
    lineHeight: "30px",
    color: "rgba(0, 0, 0, 0.66)",
    textDecoration: "none",
  },
  linkp: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    margin: "0 31px",
    borderBottom: "1px solid #C4C4C4",
  },
  linkpactive: {
    borderBottom: "5px solid #802BB1",
  },
  icon1: {
    color: "#802BB1",
  },
}))

function Freecerti(props) {
  useEffect(() => {
    googleAnalyticsAction()
  }, [])
  const classes = useStyles()
  const [AllCourseData, setAllCourseData] = useState([])
  const [AllSubjectData, setAllSubjectData] = useState([])
  const [SlugChange, setSlugChange] = useState("programming234")
  const [limit, setLimit] = useState(0)
  const [loadmorebtn, setloadmorbtn] = useState(false)
  const [loadmorecount, setloadmorecount] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const query = new URLSearchParams(props.location.search)
  var isQuery = query.get("q") ? true : false
  const [shareBtn, setShareBtn] = useState(false)

  console.log(query.get("q"))
  const onCLickSidebar = (data) => {
    props.history.push({
      search: "q=" + data,
    })
    setLimit(0)
    setloadmorbtn(true)
    setSlugChange(data)
    onGetData("api/user/course/freecourses/" + data + "/" + 10 + "/0")
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllCourseData(res1.data.data)
          setloadmorecount(res1.data.data.length > 9 ? true : false)
          setloadmorbtn(false)
          setLimit(10)
        } else {
          setloadmorecount(false)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const loadClickHandler = async () => {
    setloadmorbtn(true)
    onGetData(
      "api/user/course/freecourses/" +
        query.get("q") +
        "/" +
        (parseInt(limit) + 10) +
        "/" +
        parseInt(limit)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllCourseData(res1.data.data)
          setloadmorecount(res1.data.data.length > 9 ? true : false)
          setloadmorbtn(false)
          setLimit(parseInt(limit) + 10)
        } else {
          setloadmorecount(false)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  useEffect(() => {
    onGetData("api/user/subject/getAllData")
      .then((res) => {
        if (res.data.error == false && res.data.data.length > 0) {
          setAllSubjectData(res.data.data)
          setSlugChange(res.data.data[0].slug)
          if (isQuery == false) {
            props.history.push({
              search: "q=" + res.data.data[0].slug,
            })
          }
          onGetData(
            "api/user/course/freecourses/" +
              query.get("q") +
              "/" +
              (parseInt(limit) + 10) +
              "/" +
              parseInt(limit)
          )
            .then((res1) => {
              if (res1.data.error == false && res1.data.data.length > 0) {
                setAllCourseData(res1.data.data)
                setloadmorecount(res1.data.data.length > 9 ? true : false)
                setloadmorbtn(false)
                setLimit(parseInt(limit) + 10)
                setLoadingData(false)
              } else {
                setloadmorecount(false)
              }
            })
            .catch((error) => {
              console.log("Error")
            })
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }, [])
  const onShareBtn = () => {
    setShareBtn(true)
  }
  return (
    <>
      <Helmet>
        <div>
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://www.coursenator.com/freecertificate?q=programming'
          />
          <meta property='og:locale' content='en' />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:site' content='@coursenator11' />
          <meta name='twitter:creator' content='@coursenator11' />

          <title>Free Certificate Courses | Professional Courses</title>
          <meta
            name='description'
            content='Discover top free courses from the best E-learning providers like Udacity, FutureLearn, Udemy etc..'
          />
          <meta
            name='twitter:title'
            content='Free Certificate Courses | Professional Courses | Coursenator'
          />
          <meta
            name='twitter:description'
            content='Discover top free courses from the best E-learning providers like Udacity, FutureLearn, Udemy etc..'
          />
          <meta
            property='og:title'
            content='Free Certificate Courses | Professional Courses | Coursenator'
          ></meta>
          <meta
            property='og:description'
            content='If you want to pursue a solid career in programming, this article will help you choose the top languages to learn in 2021.'
          ></meta>
          <link
            rel='canonical'
            href='https://www.coursenator.com/freecertificate?q=programming'
          />
          <link
            rel='alternate'
            hreflang='en'
            href='https://www.coursenator.com/freecertificate?q=programming'
          ></link>
        </div>
      </Helmet>
      <NavbarOther />

      {/* {shareBtn==true?:''} */}
      <div className={classes.img}>
        <Title className={classes.title}>
          <h1 className={classes.title}>Free Courses</h1>
        </Title>
        <p className={classes.pra}>
          Discover 100% Top Free courses from the best E-learning providers like
          Udacity, FutureLearn, Udemy etc.
        </p>
      </div>
      <div className={classes.cardoutter}>
        <Grid container className={classes.container}>
          <Grid col md={4} sm={4} xs={4} className={classes.item}>
            <div className={classes.card}>
              <div className={classes.iconoutter}>
                <Icon icon={aiStatusComplete} className={classes.icon} />
              </div>
              <p className={classes.iconp}>Complete the Course</p>
            </div>
          </Grid>
          <Grid col md={4} sm={4} xs={4} className={classes.item}>
            <div className={classes.card}>
              <div className={classes.iconoutter}>
                <Icon icon={certificateCheck} className={classes.icon} />
              </div>
              <p className={classes.iconp}>Get your Course for free.</p>
            </div>
          </Grid>
          <Grid
            onClick={(e) => onShareBtn(e)}
            col
            md={4}
            xs={4}
            sm={4}
            className={classes.item}
          >
            <div className={classes.card}>
              <div className={classes.iconoutter}>
                <Icon icon={shareAlt} className={classes.icon} />
              </div>

              <p className={classes.iconp}>
                <Share {...props} />
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.container1}>
        {loadingData == true ? (
          <Loading name='Free courses' />
        ) : (
          <Grid container>
            <Grid Item md={4} sm={12}>
              <div className={`${classes.fillter} ${classes.desktop}`}>
                {AllSubjectData.length > 0
                  ? AllSubjectData.map((x, y) => {
                      return (
                        <div
                          to=''
                          onClick={() => onCLickSidebar(x.slug)}
                          className={classes.fillterlink}
                        >
                          <p
                            className={`${classes.linkp} ${
                              SlugChange == x.slug ? classes.linkpactive : ""
                            }`}
                          >
                            {x.name}
                            {SlugChange == x.slug ? (
                              <Icon
                                icon={bxsRightArrow}
                                className={classes.icon1}
                              />
                            ) : (
                              ""
                            )}
                          </p>
                        </div>
                      )
                    })
                  : ""}
                {/* <Link to='' className={classes.fillterlink}><p className={`${classes.linkp} ${classes.linkpactive}`}>Data Science <Icon icon={bxsRightArrow} className={classes.icon1}/></p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Business </p></Link>

                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Programming</p> </Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Programming Languages </p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Computer Science</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Information Technology</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Engineering & Technology</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Basic Science</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Humanities</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Social Sciences</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Politics & Society</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Language Learning</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Arts & Design</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Education & Teaching</p></Link>
                            <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Personal Development</p></Link> */}
              </div>
              <Accordion className={classes.mobile}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography className={classes.heading}>
                    Select Subject
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className={`${classes.fillter}`}>
                    {AllSubjectData.length > 0
                      ? AllSubjectData.map((x, y) => {
                          return (
                            <div
                              to=''
                              onClick={() => onCLickSidebar(x.slug)}
                              className={classes.fillterlink}
                            >
                              <p
                                className={`${classes.linkp} ${
                                  SlugChange == x.slug
                                    ? classes.linkpactive
                                    : ""
                                }`}
                              >
                                {x.name}
                                {SlugChange == x.slug ? (
                                  <Icon
                                    icon={bxsRightArrow}
                                    className={classes.icon1}
                                  />
                                ) : (
                                  ""
                                )}
                              </p>
                            </div>
                          )
                        })
                      : ""}
                    {/* <Link to='' className={classes.fillterlink}><p className={`${classes.linkp} ${classes.linkpactive}`}>Data Science <Icon icon={bxsRightArrow} className={classes.icon1} /></p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Business </p></Link>

                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Programming</p> </Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Programming Languages </p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Computer Science</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Information Technology</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Engineering & Technology</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Basic Science</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Humanities</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Social Sciences</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Politics & Society</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Language Learning</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Arts & Design</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Education & Teaching</p></Link>
                                    <Link to='' className={classes.fillterlink}><p className={classes.linkp}>Personal Development</p></Link> */}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid Item md={8} sm={12} className={classes.item}>
              {AllCourseData.length > 0
                ? AllCourseData.map((coursecard) => {
                    return <CourseCard data={coursecard} {...props} />
                  })
                : ""}
              {loadmorecount == false ? null : loadmorebtn == true ? (
                <center>
                  <CircularProgress />
                </center>
              ) : (
                <span
                  style={{
                    margin: "20.7% 0",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={() => loadClickHandler()}
                >
                  Load Next 10 results
                </span>
              )}
            </Grid>
          </Grid>
        )}
      </div>
      <Newfooter />
      <Offerads />
    </>
  )
}
export default Freecerti
