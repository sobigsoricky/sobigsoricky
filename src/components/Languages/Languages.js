import { Title } from "../../globalStyles";
import {
  makeStyles,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "./../../assets/img/logo-placeholder.png";
import clsx from "clsx";
import { onGetData } from "../../views/apicalling";
import Loading from "../Loading/Lading";
import CourseCard from "../CourseCard/CourseCard";

const Styles = makeStyles((theme) => ({
  title: {
    margin: "4% 0 !important",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "276px",
    padding: "0 48px",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    marginBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },

    [theme.breakpoints.up("1440")]: {
      maxWidth: "400px",
      height: "auto",
      minHeight: "200px",
    },
  },
  typography: {
    textDecoration: "none",
    color: "#777",
  },
  container1: {
    justifyContent: "center",
  },
  container: {
    maxWidth: "100vw",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%",
  },
  data: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  sectionDesktop: {
    display: "flex",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    margin: "0 1%",
    [theme.breakpoints.down("lg")]: {
      flexBasis: "21%",
    },
    [theme.breakpoints.up("xl")]: {
      flexBasis: "19%",
    },
  },
  img: {
    height: "80px",

    [theme.breakpoints.down("sm")]: {
      height: "60px",
    },
  },
}));

export default function Languages(props) {
  const classes = Styles();
  const [AllData, setAllData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [AllCourseData, setAllCourseData] = useState([]);
  const query = new URLSearchParams(props.location.search);
  const [limit, setLimit] = useState(0);
  const [loadmorebtn, setloadmorbtn] = useState(false);
  const [loadmorecount, setloadmorecount] = useState(false);
  var isQuery = query.get("lan") ? true : false;
  const loadClickHandler = async () => {
    setloadmorbtn(true);
    await onGetData(
      "api/user/language/getDataById/" +
      query.get("lan") +
      "/" +
      parseInt(limit) +
      10 +
      "/" +
      parseInt(limit)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllCourseData(res1.data.data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
          setLimit(parseInt(limit) + 10);
        } else {
          setloadmorecount(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (isQuery == false) {
      onGetData("api/user/language/getAllData")
        .then((response) => {
          setAllData(response.data.data);
          setLoadingData(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (isQuery == true) {
      setLoadingData(true);
      onGetData(
        "api/user/language/getDataById/" +
        query.get("lan") +
        "/" +
        parseInt(limit) +
        10 +
        "/" +
        limit
      )
        .then((res1) => {
          if (res1.data.error == false && res1.data.data.length > 0) {
            setAllCourseData(res1.data.data);
            setLimit(parseInt(limit) + 10);
            setloadmorecount(res1.data.data.length > 9 ? true : false);
            setLoadingData(false);
          } else {
            setAllCourseData([]);
          }
        })
        .catch((error) => {
          console.log("Error");
        });
    }
  }, [props.location.search]);
  return (
    <>
      {loadingData == true ? (
        <Loading name="language" />
      ) : (
        <div className={clsx(classes.container, classes.sectionDesktop)}>
          <Title className={classes.title}>List of Languages</Title>
          <Grid container className={classes.container1}>
            {AllData.map((x, y) => {
              if (x.name != "No Data") {
                return (
                  <Grid
                    item
                    xl={3}
                    lg={3}
                    md={3}
                    sm={4}
                    className={classes.grid}
                  >
                    <div className={classes.logo}>
                      <Link to={`/language-list/${x.slug}`}>
                        <img
                          src={x.image_path}
                          className={classes.img}
                          alt={x.name}
                        />
                      </Link>
                      <Link
                        to={`/language-list${x.slug}`}
                        className={classes.typography}
                      >
                        <Typography>{x.name}</Typography>
                      </Link>
                    </div>
                  </Grid>
                );
              }
            })}
          </Grid>{" "}
        </div>
      )}
    </>
  );
}
