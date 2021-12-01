import React, { useEffect, useState } from "react";
import {
  NavbarOther,
  CourseCard,
  Experttrackcard,
  Loading,
} from "../components";
import { Title } from "../globalStyles";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { Button } from "../globalStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { googleAnalyticsAction, onGetData } from "./apicalling";
import { Newfooter, Offerads } from "../components";

const useStyles = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center",
  },
  title: {
    fontSize: "32px !important",
    marginBottom: "1%",
  },
  data: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B4E54",
  },
  btnlink: {
    textDecoration: "none",
    marginTop: "1%",
    marginBottom: "1%",
    color: "white",
  },
  card: {
    maxWidth: "304px",
    minWidth: "304px",
    width: "auto",
    backgroundColor: "#F8F0FC",
    padding: "30px 32px 32px 50px",
    margin: "0 0 0 10%",
  },
  cardstack: {
    margin: "0 0 0 4%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  text: {
    color: "#000000",
    fontWeight: "300",
    fontSize: "20px",
    listStyle: "disc",
    "&::marker": {
      color: "#802BB1",
      fontSize: "25px",
    },
  },
  courses: {
    marginTop: "50px",
  },
}));

export default function Viewexperttrack(props) {
  const classes = useStyles();
  const [AllCourseData, setAllCourseData] = useState([]);
  const [TrackData, setTrackData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const query = new URLSearchParams(props.location.search);
  const [limit, setLimit] = useState(0);
  const [loadmorebtn, setloadmorbtn] = useState(false);
  const [loadmorecount, setloadmorecount] = useState(false);
  const loadClickHandler = async () => {
    setloadmorbtn(true);
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
          setAllCourseData(res1.data.data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
          setLimit(parseInt(limit) + 10);
        } else {
          setloadmorbtn(false);
          setLoadingData(false);
        }
      })
      .catch((error) => {
        setLoadingData(false);
        console.log(error);
      });
  };
  useEffect(() => {
    googleAnalyticsAction();
    if (query.get("p")) {
      onGetData("api/user/track/getAllDataByTract/" + query.get("p"))
        .then((res1) => {
          setTrackData(res1.data.data[0]);
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
                setAllCourseData(res.data.data);
                setLimit(parseInt(limit) + 10);
                setloadmorecount(res.data.data.length > 9 ? true : false);
                setLoadingData(false);
              } else {
                setloadmorbtn(false);
                setLoadingData(false);
              }
            })
            .catch(function (error1) {
              setLoadingData(false);
              console.log(error1);
            });
        })
        .catch((error) => {
          setLoadingData(false);
          console.log("Error");
        });
    }
  }, []);
  return (
    <>
      <NavbarOther />
      {loadingData == true ? (
        <Loading name="View Track" />
      ) : (
        <>
          <div className={classes.track}>
            <Title className={classes.title}>{TrackData.track_name}</Title>
            <h5 className={classes.data}>
              <div
                dangerouslySetInnerHTML={{ __html: TrackData.description }}
              ></div>
            </h5>
            <br></br>
            <Button blue big className={classes.btnlink}>
              Follow this Track
            </Button>
          </div>

          <Grid className={classes.courses} container>
            <Grid item xs={12} md={3}>
              <Card className={classes.card}>
                <ul>
                  <li className={classes.text}>
                    Users can skip and edit the courses if they want to after
                    the track gets added to their ‘Course Path.
                  </li>
                </ul>
              </Card>
            </Grid>
            <Grid item xs={12} md={9}>
              <div className={classes.cardstack}>
                {AllCourseData.length > 0
                  ? AllCourseData.map((coursecard) => {
                      return <Experttrackcard data={coursecard} {...props} />;
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
        </>
      )}
      <Newfooter />
      <Offerads />
    </>
  );
}
