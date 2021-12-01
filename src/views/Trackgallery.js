import { makeStyles } from "@material-ui/core";
import {
  Navbar,
  DatascientistCard,
  ArtistCard,
  SoftwaredevCard,
  NavbarOther,
  Loading,
} from "../components";
import { Title } from "../globalStyles";
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import { onGetData } from "./apicalling";
import { CircularProgress } from "@material-ui/core";
import Helmet from "react-helmet";
import { Newfooter, Offerads } from "../components";

const useStyle = makeStyles((theme) => ({
  track: {
    marginTop: "95px",
    marginLeft: "17%",
    marginRight: "17%",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "1%",
    width: "733px",
    margin: "auto",
    color: "#000 !important",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  data: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B4E54",
    textAlign: "left",
  },
  cards: {
    margin: "5% 0",

    [theme.breakpoints.down("sm")]: {
      width: "unset",
    },
  },
}));
export default function Trackgallery() {
  const classes = useStyle();
  const [AllTrackData, setAllTrackData] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loadmorebtn, setloadmorbtn] = useState(false);
  const [loadmorecount, setloadmorecount] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const onCLickSidebar = (data) => {
    setLimit(0);
    setloadmorbtn(true);

    onGetData("api/user/course/freecourses/" + data + "/" + 10 + "/0")
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllTrackData(res1.data.data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
          setLimit(10);
        } else {
          setloadmorecount(false);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  const loadClickHandler = async () => {
    setloadmorbtn(true);
    onGetData(
      "api/user/track/getAllData/" +
        (parseInt(limit) + 10) +
        "/" +
        parseInt(limit)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllTrackData(res1.data.data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
          setLimit(parseInt(limit) + 10);
        } else {
          setloadmorecount(false);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  useEffect(() => {
    onGetData(
      "api/user/track/getAllData/" +
        (parseInt(limit) + 10) +
        "/" +
        parseInt(limit)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllTrackData(res1.data.data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
          setLimit(parseInt(limit) + 10);
          setLoadingData(false);
        } else {
          setloadmorecount(false);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);
  return (
    <>
      <NavbarOther />
      <Helmet>
        <title>Track Gallery | Collection of Learning Paths</title>
        <meta
          name="description"
          content="Track Gallery is a collection of Learning Paths made by our Learners. Follow other's tracks if you find it challenging to make your own."
        />
      </Helmet>
      <div className={classes.track}>
        <Title className={classes.title}>
          Are you finding it difficult to make your learning path ?
        </Title>
        <h5 className={classes.data}>
          The Track Gallery is a collection of tracks made by our users. If you
          feel confused or find it challenging to make your learning path, then
          track gallery is for you.
          <p>
            This feature allows you to see what tracks/learning journeys others
            have made. Moreover, you can follow these tracks.
          </p>
          <p>
            You can look for various tracks in the track gallery and select the
            most suitable track for you. After the track gets added to your
            course path, you can make desired changes in it.
          </p>
        </h5>
      </div>
      {loadingData == true ? (
        <Loading name="Track Gallery" />
      ) : (
        <Grid className={classes.cards} container>
          {AllTrackData.length > 0
            ? AllTrackData.map((coursecard) => {
                return <DatascientistCard data={coursecard} />;
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
          {/* <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid>
            </Grid>
            <Grid className={classes.cards}  container>
                <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <DatascientistCard />
                </Grid> */}
        </Grid>
      )}
      <Newfooter />
      <Offerads />
    </>
  );
}
