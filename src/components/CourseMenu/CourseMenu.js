import {
  Button,
  ButtonGroup,
  Popover,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React from "react"
import BreadCrumb from "../BreadCrumbs/BreadCrumb"
import Btn from "../Button/Btn"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import ShareBtnCourseList from "../Share/ShareBtnsCorseList"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    transition: "transform 2s",
    flexDirection: "column",
    marginBottom: 20,
    height: "fit-content",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "0%",
      flexDirection: "column",
      marginTop: "5%",
    },
  },
  popover: {
    top: 200,
  },
  drop: {
    lineHeight: "25px",
    fontFamily: "Sora",
    fontSize: "16px",
    textAlign: "left",
    cursor: "pointer",
    "&:hover": {
      color: "var(--primary)",
    },
  },

  btn: {
    marginLeft: "auto",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginBottom: "-10px",
    },
  },
  toolbar: {
    justifyContent: "center",
    diaply: "flex",
    alignItems: "center",
    color: "#000",
    background: "#E2E6F0",
    height: "fit-content",
    width: 900,
    borderRadius: 10,
  },
  link: {
    textDecoration: "none",
    color: "#000",
    padding: 20,
  },
  filter: {
    color: "#000",
    fontWeight: 500,
    height: 50,
    textTransform: "none",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "8px",
      fontSize: "14px",
    },
  },
  arrow: {
    color: "#00288D",
    fontSize: "30px !important",
  },
  typography: {
    padding: "18px !important",
    width: 156,
    height: 210,
    overflowY: "scroll",
    scrollbarColor: "#ffff #BEBDBD",
    msScrollbarArrowColor: "#BEBDBD",
    "&::-webkit-scrollbar ": {
      width: "13.18px",
      height: "103.61px",
    },
    "&::-webkit-scrollbar-track ": {
      background: "#FFF",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#BEBDBD",

      height: "103.61px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&::-webkit-scrollbar-button": {
      backgroundColor: "#AFAFAF",
      boxShodow: "0px 4px 4px rgba(0, 0, 0, 0.1)",

      width: " 13.18px",
      height: "12.3px",
    },
  },
  hr: {
    margin: "13.67px 0",
  },
  btngroup: {
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },

  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      minWidth: "1141px",
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      minWidth: "1px",
      justifyContent: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  smallBtn: {
    height: "32px",
    width: "125px",
  },
  breadcrumb: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}))

function CourseMenu(props) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined
  const query = new URLSearchParams(props.location.search)

  //language
  const [languageanchorEl, setlanguageAnchorEl] = React.useState(null)
  const handleClicklanguage = (event) => {
    setlanguageAnchorEl(event.currentTarget)
  }
  const handleCloselanguage = () => {
    setlanguageAnchorEl(null)
  }
  const openlanguage = Boolean(languageanchorEl)
  const idlanguage = openlanguage ? "simple-popover" : undefined
  const onLanguageChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        data +
        "&lv=" +
        query.get("lv") +
        "&du=" +
        query.get("du") +
        "&pr=" +
        query.get("pr") +
        "&sd=" +
        query.get("sd") +
        "&lt=" +
        query.get("lt"),
    })
  }

  //level
  const [levelanchorEl, setlevelAnchorEl] = React.useState(null)
  const handleClicklevel = (event) => {
    setlevelAnchorEl(event.currentTarget)
  }
  const handleCloselevel = () => {
    setlevelAnchorEl(null)
  }
  const openlevel = Boolean(levelanchorEl)
  const idlevel = openlevel ? "simple-popover" : undefined
  const onLevelChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        query.get("lg") +
        "&lv=" +
        data +
        "&du=" +
        query.get("du") +
        "&pr=" +
        query.get("pr") +
        "&sd=" +
        query.get("sd") +
        "&lt=" +
        query.get("lt"),
    })
  }
  //duration
  const [durationanchorEl, setdurationAnchorEl] = React.useState(null)
  const handleClickduration = (event) => {
    setdurationAnchorEl(event.currentTarget)
  }
  const handleCloseduration = () => {
    setdurationAnchorEl(null)
  }
  const openduration = Boolean(durationanchorEl)
  const idduration = openduration ? "simple-popover" : undefined
  const onDurationChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        query.get("lg") +
        "&lv=" +
        query.get("lv") +
        "&du=" +
        data +
        "&pr=" +
        query.get("pr") +
        "&sd=" +
        query.get("sd") +
        "&lt=" +
        query.get("lt"),
    })
  }

  //provider
  const [provideranchorEl, setproviderAnchorEl] = React.useState(null)
  const handleClickprovider = (event) => {
    setproviderAnchorEl(event.currentTarget)
  }
  const handleCloseprovider = () => {
    setproviderAnchorEl(null)
  }
  const openprovider = Boolean(provideranchorEl)
  const idprovider = openprovider ? "simple-popover" : undefined
  const onProviderChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        query.get("lg") +
        "&lv=" +
        query.get("lv") +
        "&du=" +
        query.get("du") +
        "&pr=" +
        data +
        "&sd=" +
        query.get("sd") +
        "&lt=" +
        query.get("lt"),
    })
  }
  //startingDate
  const [startingDateanchorEl, setstartingDateAnchorEl] = React.useState(null)
  const handleClickstartingDate = (event) => {
    setstartingDateAnchorEl(event.currentTarget)
  }
  const handleClosestartingDate = () => {
    setstartingDateAnchorEl(null)
  }
  const openstartingDate = Boolean(startingDateanchorEl)
  const idstartingDate = openstartingDate ? "simple-popover" : undefined
  const onStartingDateChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        query.get("lg") +
        "&lv=" +
        query.get("lv") +
        "&du=" +
        query.get("du") +
        "&pr=" +
        query.get("pr") +
        "&sd=" +
        data +
        "&lt=" +
        query.get("lt"),
    })
  }

  //learningType
  const [learningTypeanchorEl, setlearningTypeAnchorEl] = React.useState(null)
  const handleClicklearningType = (event) => {
    setlearningTypeAnchorEl(event.currentTarget)
  }
  const handleCloselearningType = () => {
    setlearningTypeAnchorEl(null)
  }
  const openlearningType = Boolean(learningTypeanchorEl)
  const idlearningType = openlearningType ? "simple-popover" : undefined

  const onLearningTypeChange = (data) => {
    props.history.push({
      search:
        "lg=" +
        query.get("lg") +
        "&lv=" +
        query.get("lv") +
        "&du=" +
        query.get("du") +
        "&pr=" +
        query.get("pr") +
        "&sd=" +
        query.get("sd") +
        "&lt=" +
        data,
    })
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.breadcrumb}>
          <BreadCrumb />
          <div className={classes.btn}>
            <Btn className={classes.smallBtn}>Follow</Btn>
            <ShareBtnCourseList {...props} />
            {/* <Btn className={classes.smallBtn}>Share List</Btn> */}
          </div>
        </div>
        <div className={classes.grow}>
          <div className={classes.sectionDesktop}>
            <ButtonGroup
              size='large'
              variant='contained'
              color='#E2E6F0'
              aria-label='contained primary button group'
              className={classes.btngroup}
            >
              <Button
                aria-describedby={idlanguage}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
                onClick={handleClicklanguage}
              >
                Language
              </Button>
              <Popover
                className={classes.popover}
                id={idlanguage}
                open={openlanguage}
                anchorEl={languageanchorEl}
                onClose={handleCloselanguage}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.languageData.length > 0
                    ? props.languageData.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onLanguageChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>
              <Button
                aria-describedby={idlevel}
                onClick={handleClicklevel}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
              >
                Level
              </Button>
              <Popover
                className={classes.popover}
                id={idlevel}
                open={openlevel}
                anchorEl={levelanchorEl}
                onClose={handleCloselevel}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.levelData.length > 0
                    ? props.levelData.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onLevelChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>

              <Button
                aria-describedby={idduration}
                onClick={handleClickduration}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
              >
                Duration
              </Button>
              <Popover
                className={classes.popover}
                id={idduration}
                open={openduration}
                anchorEl={durationanchorEl}
                onClose={handleCloseduration}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.durationData.length > 0
                    ? props.durationData.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onDurationChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>

              <Button
                aria-describedby={idprovider}
                onClick={handleClickprovider}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
              >
                Provider
              </Button>
              <Popover
                className={classes.popover}
                id={idprovider}
                open={openprovider}
                anchorEl={provideranchorEl}
                onClose={handleCloseprovider}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.providerData.length > 0
                    ? props.providerData.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onProviderChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>
              <Button
                aria-describedby={idstartingDate}
                onClick={handleClickstartingDate}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
              >
                Start Date
              </Button>
              <Popover
                className={classes.popover}
                id={idstartingDate}
                open={openstartingDate}
                anchorEl={startingDateanchorEl}
                onClose={handleClosestartingDate}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.startingDate.length > 0
                    ? props.startingDate.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onStartingDateChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>
              <Button
                aria-describedby={idlearningType}
                onClick={handleClicklearningType}
                className={classes.filter}
                endIcon={<ArrowDropDownIcon className={classes.arrow} />}
              >
                Learning Type
              </Button>
              <Popover
                className={classes.popover}
                id={idlearningType}
                open={openlearningType}
                anchorEl={learningTypeanchorEl}
                onClose={handleCloselearningType}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography className={classes.typography}>
                  {props.learningTYpe.length > 0
                    ? props.learningTYpe.map((x, k) => {
                        return (
                          <>
                            <p
                              className={classes.drop}
                              onClick={() => onLearningTypeChange(x.slug)}
                            >
                              {x.name}
                            </p>
                            <hr className={classes.hr} />
                          </>
                        )
                      })
                    : ""}
                </Typography>
              </Popover>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseMenu
