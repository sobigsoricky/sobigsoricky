import { Title } from "../globalStyles"
import React, { useEffect, useState } from "react"
import {
  NavbarOther,
  CourseCard,
  CourseMenu,
  Btn,
  Treeview,
  Searchbar,
  Loading,
} from "../components"
import { Button, Typography } from "@material-ui/core"
import { SearchBar } from "../components/HeroSection/HeroSecElements"
import { Link } from "react-router-dom"
import clsx from "clsx"
import StyledCheckbox from "../components/Signup/StyledCheckbox"
import { Styles } from "../assets/jss/Styles"
import { FaSearch } from "react-icons/fa"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import { makeStyles } from "@material-ui/core/styles"
import { googleAnalyticsAction, onGetData } from "./apicalling"
import CircularProgress from "@material-ui/core/CircularProgress"
import Helmet from "react-helmet"
import { Newfooter, Offerads } from "../components"
import marked from "marked"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: " 2px 4px",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  container: {
    marginTop: "100px",
    maxWidth: "100vw",
    marginRight: "4%",
    marginLeft: "4%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      marginRight: "2%",
    },
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
    "&:hover": {
      background: "#802BB1",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 0 0",
    },
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
    filter: "drop-shadow(0px 10px 25px rgba(0, 0, 0, 0.27))",
    height: "50px",
    borderRadius: "30px",
    zIndex: "1",
    [theme.breakpoints.down("sm")]: {},
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
  outersearch: {
    minWidth: "55%",
  },
}))

export default function CourseList(props) {
  const classes = Styles()
  const classes1 = useStyles()

  const [loadingData, setLoadingData] = useState(true)
  const [loadingData1, setLoadingData1] = useState(true)
  const [AllCourseData, setAllCourseData] = useState([])
  const [AllSubSubjectData, setAllSubSubjectData] = useState([])
  const [AllLanguageData, setAllLanguageData] = useState([])
  const [AllLevelData, setAllLevelData] = useState([])
  const [AllDurationData, setAllDurationData] = useState([])
  const [AllProviderData, setAllProviderData] = useState([])
  const [AllStartingDateData, setAllStartingDateData] = useState([])
  const [AllLearningTypeData, setAllLearningTypeData] = useState([])
  const [Name, setname] = useState("")
  const [Description, setDescription] = useState("")
  const [paramsName, setParamsName] = useState(props.match.params.name)
  const [LimitCount, setLimitCount] = useState(0)
  const [loadmorebtn, setloadmorbtn] = useState(false)
  const [loadmorecount, setloadmorecount] = useState(false)
  const loadClickHandler = async () => {
    setLimitCount(parseInt(LimitCount) + 10)
    setloadmorbtn(true)
    await onGetData(
      "api/user/course/getDataBySubSubject/" +
        props.match.params.name +
        "/" +
        parseInt(LimitCount) +
        10
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          var data = AllCourseData
          res1.data.data.forEach((element) => {
            data.push(element)
          })
          setAllCourseData(data)
          setloadmorecount(res1.data.data.length > 9 ? true : false)
          setloadmorbtn(false)
        } else {
          setloadmorecount(false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const pq = async () => {
    await onGetData(
      "api/user/subject/getSubSubjectBySlug/" + props.match.params.name
    )
      .then((res) => {
        if (res.data.error == false) {
          setAllSubSubjectData(res.data.data)
          setLoadingData(false)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const ab = async () => {
    setLoadingData1(true)

    await onGetData(
      "api/user/course/getDataBySubSubject/" +
        props.match.params.name +
        "/" +
        LimitCount +
        props.location.search
    )
      .then((res1) => {
        if (res1.data.error == false && res1.data.data.length > 0) {
          setAllCourseData(res1.data.data)
          setloadmorecount(res1.data.data.length > 9 ? true : false)
          setname(res1.data.name)
          setDescription(res1.data.description ? res1.data.description : "")
          setLoadingData1(false)
        } else {
          setloadmorecount(false)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const languageEffect = async () => {
    await onGetData("api/user/filter/getLanguage")
      .then((res) => {
        if (res.data.error == false) {
          setAllLanguageData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const levelEffect = async () => {
    await onGetData("api/user/filter/getLevel")
      .then((res) => {
        if (res.data.error == false) {
          setAllLevelData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const DurationEffect = async () => {
    await onGetData("api/user/filter/getDuration")
      .then((res) => {
        if (res.data.error == false) {
          setAllDurationData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const ProviderEffect = async () => {
    await onGetData("api/user/filter/getProvider")
      .then((res) => {
        if (res.data.error == false) {
          setAllProviderData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const StartingDateEffect = async () => {
    await onGetData("api/user/filter/getStartingDate")
      .then((res) => {
        if (res.data.error == false) {
          setAllStartingDateData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  const LearningTypeEffect = async () => {
    await onGetData("api/user/filter/getLearningType")
      .then((res) => {
        if (res.data.error == false) {
          setAllLearningTypeData(res.data.data)
        }
      })
      .catch((error) => {
        console.log("Error")
      })
  }
  useEffect(() => {
    googleAnalyticsAction()
    languageEffect()
    levelEffect()
    DurationEffect()
    ProviderEffect()
    StartingDateEffect()
    LearningTypeEffect()
    ab()
    pq()
  }, [props])

  return (
    <>
      <Helmet>
        <title>{Name} | List of Free Online Courses</title>
        <meta
          name='description'
          content={`List of professional courses in ${Name}`}
        />
      </Helmet>
      <NavbarOther />
      <div className={classes1.container}>
        <div style={{ marginRight: "auto" }}>
          <Title style={{ textAlign: "left" }}>{Name}</Title>
          <Typography className={classes.typography}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(
                  Description != null && Description == "" ? "" : Description
                ),
              }}
            ></div>
            {/* <div dangerouslySetInnerHTML={{ __html: Description }}></div> */}
          </Typography>
        </div>

        <CourseMenu
          {...props}
          languageData={AllLanguageData}
          levelData={AllLevelData}
          durationData={AllDurationData}
          providerData={AllProviderData}
          startingDate={AllStartingDateData}
          learningTYpe={AllLearningTypeData}
        />

        <div className={classes.certificate}>
          <Typography style={{ fontWeight: 600 }}>
            With certifcates
            <StyledCheckbox />
          </Typography>
        </div>
        <div className={classes.coursecard}>
          {loadingData == true || loadingData1 == true ? (
            <Loading name='Course List' />
          ) : (
            <>
              <div className={classes.sectionMobile}>
                <Treeview AllSubSubjectData={AllSubSubjectData} />
              </div>
              <div className={clsx(classes.menulist, classes.sectionDesktop)}>
                <Typography className={`${classes1.active} ${classes.link} `}>
                  Related courses
                </Typography>
                {loadingData == true ? (
                  <center>
                    <CircularProgress />
                  </center>
                ) : AllSubSubjectData.length > 0 ? (
                  AllSubSubjectData.map((x, k) => {
                    if (x.name != "No Data") {
                      return (
                        <Link to={`/course/${x.slug}`} className={classes.link}>
                          {x.name}
                        </Link>
                      )
                    }
                  })
                ) : (
                  ""
                )}

                <Link
                  className={clsx(classes.cataloglink, classes.link)}
                  to='/catalog'
                >
                  View Catalogue
                </Link>
              </div>

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
                    return <CourseCard data={coursecard} {...props} />
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
                    className={classes1.load}
                    onClick={() => loadClickHandler()}
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
  )
}
