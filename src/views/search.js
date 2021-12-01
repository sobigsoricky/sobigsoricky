import { Title } from "../globalStyles";
import React, { useEffect, useState } from "react";
import {
  NavbarOther,
  CourseCard,
  CourseMenu,
  Btn,
  Treeview,
  Searchbar,
  Loading,
} from "../components";
import { Button, Typography } from "@material-ui/core";
import { SearchBar } from "../components/HeroSection/HeroSecElements";
import { Link } from "react-router-dom";
import clsx from "clsx";
import StyledCheckbox from "../components/Signup/StyledCheckbox";
import { Styles } from "../assets/jss/Styles";
import { FaSearch } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { onGetData } from "./apicalling";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Newfooter, Offerads } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: " 2px 4px",
    alignItems: "center",
  },

  icon: {
    color: "var(--primary)",
  },
  span: {
    color: "#000",
  },
  p: {
    color: "var(--white)",
    fontWeight: "400",
    fontSize: "25px",
    zIndex: "1",
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  btn: {
    background: "#802BB1",
    width: "125px",
    margin: "0 0 0 57px",
  },
  active: {
    background: "#777777",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    color: "#fff",
  },
  suggestionul: {
    left: "26px",
    position: "absolute",
    background: "#fff",
    top: "53px",
    zIndex: "99",
    width: "77%",
    maxWidth: "830px",
    boxShadow: "8px 8px 20px #C4C4C4",
    borderRadius: " 0px 0px 20px 20px",
  },
  suggestionli: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 20px",
    alignItems: "center",
  },
  suggestionname: {
    fontWeight: "600",
    fontSize: "18px",
    color: "rgba(75, 78, 84, 0.74)",
    marginBottom: "2%",
  },
  suggestionuniversity: {
    fontWeight: "600",
    fontSize: "16px",
    color: "#B170D7",
  },
  suggestionright: {
    marginRight: "5%",
  },
  suggestionprovider: {
    fontWeight: "600",
    fontSize: "18px",
    color: "#2D283E",
    textAlign: "center",
    filter: "drop-shadow(0px 4px 4px #00000040)",
  },
  suggestionrating: {
    fontWeight: "600",
    fontSize: "30px",
    color: "#C4C4C4",
    textAlign: "center",
  },
  suggestionsee: {
    fontWeight: "600",
    fontSize: "15px",
    color: "#B170D7",
    textAlign: "center",
    padding: "3%",
  },
  textfield: {
    background: "#fff",
    width: "100vw",
    maxWidth: "742px",
    filter: "drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.27))",
    height: "50px",
    borderRadius: "30px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
    },
  },
  input: {
    flex: 1,
    marginLeft: "8px",
  },
  iconButton: {
    color: "#802BB1",
  },
  load: {
    margin: "3.7% 0",
    cursor: "pointer",
  },
}));

export default function SearchList(props) {
  const classes = Styles();
  const classes1 = useStyles();

  const [loadingData1, setLoadingData1] = useState(true);
  const [AllCourseData, setAllCourseData] = useState([]);
  const [loadmorebtn, setloadmorbtn] = useState(false);
  const [loadmorecount, setloadmorecount] = useState(false);
  const [LimitCount, setLimitCount] = useState(0);
  const pq = async () => {
    await onGetData(
      "api/user/searchall/" +
        props.match.params.name +
        "/" +
        (parseInt(LimitCount) + 10) +
        "/" +
        LimitCount
    )
      .then((res) => {
        if (res.data.error == false) {
          setAllCourseData(res.data.data);
          setLoadingData1(false);
          setloadmorecount(true);
          setloadmorbtn(false);
          setLimitCount(10);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  const loadClickHandler = async () => {
    setLimitCount(parseInt(LimitCount));
    setloadmorbtn(true);
    await onGetData(
      "api/user/searchall/" +
        props.match.params.name +
        "/" +
        (parseInt(LimitCount) + 10) +
        "/" +
        parseInt(LimitCount)
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          var data = AllCourseData;
          res1.data.data.forEach((element) => {
            data.push(element);
          });
          setLimitCount(parseInt(LimitCount) + 10);
          setAllCourseData(data);
          setloadmorecount(res1.data.data.length > 9 ? true : false);
          setloadmorbtn(false);
        } else {
          setloadmorecount(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    pq();
  }, [props.match.params]);

  return (
    <>
      <NavbarOther />
      <div className={classes.container}>
        <Typography className={classes.typography}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          lobortis non urna vel feugiat. Sed lectus ante, placerat et nibh
          vitae, faucibus dapibus justo.
        </Typography>
        <div className={classes.coursecard}>
          {loadingData1 == true ? (
            <Loading name="Course List" />
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  maxWidth: "820px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {loadingData1 == true ? (
                  <center>
                    <CircularProgress />
                  </center>
                ) : AllCourseData.length > 0 ? (
                  AllCourseData.map((coursecard) => {
                    return <CourseCard data={coursecard} />;
                  })
                ) : (
                  ""
                )}
                {loadmorecount == false ? null : loadmorebtn == true ? (
                  <center>
                    <CircularProgress />
                  </center>
                ) : (
                  <span
                    onClick={() => loadClickHandler()}
                    className={classes1.load}
                  >
                    Load Next 10 results
                  </span>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <Newfooter />
      <Offerads />
    </>
  );
}
