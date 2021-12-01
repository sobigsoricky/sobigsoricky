import { CircularProgress, makeStyles } from "@material-ui/core"
import { Button } from "../globalStyles"
import React, { useEffect, useState } from "react"
import { Newfooter, Offerads } from "../components"

import {
  Navbar,
  CourseCard,
  CoursePath,
  NavbarOther,
  Loading,
} from "../components"
import { Title } from "../globalStyles"
import Viewtrackimg from "../assets/img/viewtrack.jpg"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Stepper from "../components/stepper/stepper"
import { onGetData } from "./apicalling"
import ReactGA from "react-ga"
ReactGA.pageview(window.location.pathname + window.location.search)

const useStyles = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "15%",
    marginRight: "15%",
    textAlign: "center",
  },
  container: {
    marginTop: "34px",
    marginLeft: "15%",
    marginRight: "15%",
    flexGrow: 1,
  },
  profie: {
    marginTop: "100px",
    marginLeft: "6%",
    marginRight: "14%",
    flexGrow: 1,
  },
  trackImage: {
    maxWidth: "312px",
    maxHeight: "198px",
    margin: "1%",
    width: "100%",
    height: "100%",
    boxShadow: "2px 2px 2px 2px #d7dbd8",
  },
  card: {
    maxHeight: "198px",
    height: "100%",
  },
  title: {
    textAlign: "center",
    margin: "20px",
  },
  btitle: {
    fontWeight: 700,
    fontSize: "24px",
    color: "#2D283E",
    padding: "10px 5px 5px 40px",
  },
  info: {
    color: "#a5a2a2",
  },
  btnlink: {
    textDecoration: "none",
    color: "#ffff",
    marginTop: "5%",
    background: "#7777 !important",
    fontWeight: "normal !important",
    "&:hover": {
      background: "var(--primary) !important",
    },
  },
  cards: {
    marginLeft: "10%",
    marginRight: "%10",
    marginTop: "10px",
  },
  cardstack: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
}))
export default function Viewtrack(props) {
  const classes = useStyles()
  const [AllCourseData, setAllCourseData] = useState([])
  const [TrackData, setTrackData] = useState([])
  const [loadingData, setLoadingData] = useState(true)
  const query = new URLSearchParams(props.location.search)
  const [limit, setLimit] = useState(0)
  const [loadmorebtn, setloadmorbtn] = useState(false)
  const [loadmorecount, setloadmorecount] = useState(false)
  const loadClickHandler = async () => {
    setloadmorbtn(true)
    await onGetData(
      "api/user/track/getAllCourseData/" +
        query.get("p") +
        "/" +
        parseInt(limit) +
        10 +
        "/" +
        limit
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllCourseData(res1.data.data)
          setloadmorecount(res1.data.data.length > 9 ? true : false)
          setloadmorbtn(false)
          setLimit(parseInt(limit) + 10)
        } else {
          setloadmorbtn(false)
          setLoadingData(false)
        }
      })
      .catch((error) => {
        setLoadingData(false)
        console.log(error)
      })
  }
  useEffect(() => {
    if (query.get("p")) {
      onGetData("api/user/track/getAllDataByTract/" + query.get("p"))
        .then((res1) => {
          if (res1.data.error == false && res1.data.data.length > 0) {
            setTrackData(res1.data.data[0])
            onGetData(
              "api/user/track/getAllCourseData/" +
                query.get("p") +
                "/" +
                (parseInt(limit) + 10) +
                "/" +
                limit
            )
              .then((res) => {
                if (res.data.error == false && res.data.data.length > 0) {
                  setAllCourseData(res.data.data)
                  setLimit(parseInt(limit) + 10)
                  setloadmorecount(res.data.data.length > 9 ? true : false)
                  setLoadingData(false)
                } else {
                  setloadmorbtn(false)
                  setLoadingData(false)
                }
              })
              .catch((error) => {
                setLoadingData(false)
                console.log(error)
              })
          }
        })
        .catch(function (error1) {
          setLoadingData(false)
          console.log(error1)
        })
    }
  }, [])
  return (
    <>
      <NavbarOther />
      <div className={classes.track}>
        <Title>User's Track Profile</Title>
        <h5 style={{ textAlign: "left" }}>
          Here's a track made by a learner on coursenator. If you like this
          learning journey and want to become a part of it, simply click on
          'Follow this Track", or you can add courses from this track to your
          track by clicking on the "Add to Track" button against every course.
        </h5>
        <br></br>
        <hr></hr>
      </div>

      {loadingData == true ? (
        <Loading name='View Track' />
      ) : (
        <>
          <div className={classes.container}>
            <Grid container>
              <Grid item xs={12} md={5}>
                <img
                  className={classes.trackImage}
                  src={
                    TrackData.track_image ? TrackData.track_image : Viewtrackimg
                  }
                ></img>
              </Grid>
              <Grid item xs={12} md={7}>
                <Card className={classes.card}>
                  <Typography variant='h5' className={classes.btitle}>
                    Track Name :{" "}
                    <span className={classes.info}>{TrackData.track_name}</span>
                  </Typography>
                  <Typography variant='h5' className={classes.btitle}>
                    {" "}
                    Creator :{" "}
                    <span className={classes.info}>
                      {TrackData.userdata.length > 0
                        ? TrackData.userdata[0].name
                        : ""}
                    </span>
                  </Typography>
                  <Typography variant='h5' className={classes.btitle}>
                    No. of courses :{" "}
                    <span className={classes.info}>{TrackData.count}</span>
                  </Typography>
                  <Typography variant='h5' className={classes.btitle}>
                    Follows : <span className={classes.info}>1K +</span>
                  </Typography>
                </Card>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button spacing ml={2} blue big className={classes.btnlink}>
                    Follow this Track
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.profie}>
            <Typography variant='h5' className={classes.btitle}>
              Course Path
            </Typography>
            <Grid container>
              {/* <Grid item md={3}>
                <Stepper />
              </Grid> */}
              <Grid item md={9}>
                <div className={classes.cardstack}>
                  {AllCourseData.length > 0
                    ? AllCourseData.map((coursecard) => {
                        return <CourseCard data={coursecard[0]} {...props} />
                      })
                    : ""}
                  {loadmorecount == false ? null : loadmorebtn == true ? (
                    <center>
                      <CircularProgress />
                    </center>
                  ) : (
                    <span
                      style={{ margin: "20.7% 0" }}
                      onClick={() => loadClickHandler()}
                    >
                      Load Next 10 results
                    </span>
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      )}
      <CoursePath />
      <Newfooter />
      <Offerads />
    </>
  )
}
