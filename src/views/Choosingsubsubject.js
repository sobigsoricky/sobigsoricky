import { makeStyles } from "@material-ui/core";
import react, { useEffect, useState } from "react";
import { Loading, Navbar, NavbarOther, SubsubjectCard } from "../components";
import { Title } from "./../globalStyles";
import Grid from "@material-ui/core/Grid";
import { googleAnalyticsAction, onGetData } from "./apicalling";
import Helmet from "react-helmet";
import { Newfooter, Offerads } from "../components";


const useStyle = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "20%",
    marginRight: "20%",
    textAlign: "center",
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
export default function Choosingsubsubject(props) {
  const classes = useStyle();
  const [AllSubject, setAllSubject] = useState([]);
  const [SubjectDetails, setSubjectDetails] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    googleAnalyticsAction();
    onGetData("api/user/subject/getSubjectBySlug/" + props.match.params.text)
      .then((res) => {
        if (res.data.error == false) {
          setSubjectDetails(res.data.data[0]);
          onGetData(
            "api/user/subject/getSubSubjectBySlug/" + props.match.params.text
          )
            .then((res1) => {
              if (res1.data.error == false) {
                setAllSubject(res1.data.data);
                setLoadingData(false);
              }
            })
            .catch((error1) => {
              console.log("Error");
            });
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
                <title>Customize your Learning Path | Choose Sub-Subject</title>
                <meta name="description" content="It's time to pick some sub-subjects/ specific topics you want to study. Select from a range of topics below, and you'll find many professional courses." />
            </Helmet>
      <div className={classes.track}>
        <Title>
          <span className={classes.blacktitle}>Be a </span>
          professsional,<span className={classes.blacktitle}>
            choose your
          </span>{" "}
          learning path
        </Title>
        <h5 className={classes.data}>
          Great! You've selected your main subject. It's time to pick some
          sub-subjects/ specific topics you want to study. Select from a range
          of topics below, and you'll find a lot of suitable courses on the next
          page.
          <p>X courses found for English.</p>
          <p>
            It's time to select some courses to start your learning journey.
            Simply click on "add to track" on whichever course you want to add
            to your tracks. If you wish to study any course later, bookmark it
            or share it with your friends.{" "}
          </p>
        </h5>
      </div>
      <h5 className={classes.data2}>
        Choose the sub subject you want to learn
      </h5>
      {loadingData == true ? (
        <Loading name="Coustomize Path" />
      ) : (
        <Grid className={classes.cards} container>
          {AllSubject.length > 0
            ? AllSubject.map((x, y) => {
                return (
                  <>
                    <Grid item xs={6} sm={6} md={4} lg={4}>
                      <SubsubjectCard data={x} data1={SubjectDetails} />
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
