import { makeStyles } from "@material-ui/core";
import react, { useEffect, useState } from "react";
import { Loading, Navbar, NavbarOther, SmallCards } from "../components";
import { Title } from "./../globalStyles";
import Grid from "@material-ui/core/Grid";
import { googleAnalyticsAction, onGetData } from "./apicalling";
import Helmet from "react-helmet";
import { Newfooter, Offerads } from "../components";

const useStyle = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "13%",
    marginRight: "13%",
    textAlign: "center",
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  data: {
    marginTop: "2%",
    fontSize: "16px",
    fontWeight: "400",
    color: "#4B4E54",
    textAlign: "left",
  },
  data2: {
    textAlign: "center",
    marginTop: "2%",
    marginLeft: "10%",
    marginRight: "10%",
    fontSize: "30px",
    fontWeight: "300",
  },
  blacktitle: {
    color: "black",
  },
  cards: {
    marginBottom: "10%",
    marginTop: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}));
export default function Customizeyourpath() {
  const classes = useStyle();
  const [AllSubjectData, setAllSubjectData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    googleAnalyticsAction();
    onGetData("api/user/subject/getAllData/")
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllSubjectData(res1.data.data);
          setLoadingData(false);
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
        <title>Customize your Learning Path | Choose Subject</title>
        <meta
          name="description"
          content="We give you the access to customize your own learning path in your own ways by selecting professional courses from subjects/topics you would like to study "
        />
      </Helmet>
      <div className={classes.track}>
        <Title className={classes.title}>
          <span className={classes.blacktitle}>Be a </span>
          professsional,<span className={classes.blacktitle}>
            choose your
          </span>{" "}
          learning path
        </Title>
        <h5 className={classes.data}>
          'Customizing your own track' gives you the access to customize your
          own learning path in your own ways by selecting courses from
          subjects/topics you would like to study (from different providers
          too!) Simply start by choosing a Main Subject below, and then you'll
          be redirected to select a sub-subject.
        </h5>
      </div>
      <h5 className={classes.data2}>
        Choose from the following, the subject you are intersted in learning
      </h5>
      {loadingData == true ? (
        <Loading name="Coustomize Path" />
      ) : (
        <Grid className={classes.cards} container>
          {AllSubjectData.length > 0
            ? AllSubjectData.map((smallcards) => {
                return (
                  <>
                    <Grid item xs={6} md={4} lg={3}>
                      <SmallCards data={smallcards} />
                    </Grid>
                  </>
                );
              })
            : ""}
        </Grid>
      )}
      <Newfooter />
      <Offerads />
    </>
  );
}
