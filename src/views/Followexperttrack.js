import react, { useEffect, useState } from "react";
import { NavbarOther, RecommandCourseCard, Loading } from "./../components";
import { Title } from "../globalStyles";
import { makeStyles } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { googleAnalyticsAction, onGetData } from "./apicalling";
import Helmet from "react-helmet";
import { Newfooter, Offerads } from "../components";

const useStyle = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "15%",
    marginRight: "15%",
  },
  title: {
    fontSize: "32px",
  },
  data: {
    textAlign: "left",
    fontSize: "16px",
    color: "#4B4E54",
    fontWeight: 400,
    maxWidth: "766px",
    margin: "10px auto",
    width: "100%",
  },
  cards: {
    marginBottom: "10%",
    marginTop: "2%",
  },
}));
export default function Followexperttrack() {
  const classes = useStyle();
  const [AllTrackData, setAllTrackData] = useState([]);
  const [limit, setLimit] = useState(0);
  const [loadmorebtn, setloadmorbtn] = useState(false);
  const [loadmorecount, setloadmorecount] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  const loadClickHandler = async () => {
    setloadmorbtn(true);
    onGetData(
      "api/user/track/getAllExpertData/" +
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
    googleAnalyticsAction();
    onGetData(
      "api/user/track/getAllExpertData/" +
        (parseInt(limit) + 10) +
        "/" +
        parseInt(limit)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          console.log(res1.data.data);
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
        <title>Expert Tracks | Choose your career path!</title>
        <meta
          name="description"
          content="These tracks were made after intense research by our team to guide you on the career path you decide to choose. If you complete a track, you will have learned everything you can about the career you choose to pursue."
        />
      </Helmet>
      <div className={classes.track}>
        <Title className={classes.title}>Expert Tracks</Title>
        <h5 className={classes.data}>
          These tracks were made after intense research by our team to guide you
          on the career path you decide to choose. If you complete a track, you
          will have learned everything you can about the career you choose to
          pursue.
          <p>
            <b>Note</b>- These tracks will not provide you with the skills you
            need to get a high-paying job but will prepare you intensely for the
            positions.
          </p>
        </h5>
      </div>
      {loadingData == true ? (
        <Loading name="Expert Track" />
      ) : (
        <div className={classes.cards}>
          {AllTrackData.length > 0
            ? AllTrackData.map((cRecommandCourseCarda) => {
                return <RecommandCourseCard data={cRecommandCourseCarda} />;
              })
            : null}
        </div>
      )}
      {loadmorecount == false ? null : loadmorebtn == true ? (
        <center>
          <CircularProgress />
        </center>
      ) : (
        <span
          style={{ margin: "20.7% 0", cursor: "pointer" }}
          onClick={() => loadClickHandler()}
        >
          Load Next 10 results
        </span>
      )}
      <Newfooter />
      <Offerads />
    </>
  );
}
