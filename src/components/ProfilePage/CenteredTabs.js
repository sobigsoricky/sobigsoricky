import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Paper,
  Switch,
  withStyles,
  FormControlLabel,
  Grid,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import img from "./../../assets/img/hero-bg.png";
import { Btn } from "./../../components";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiBlackFlag } from "react-icons/gi";
import { BsBookmarksFill } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import {
  FaPen,
  FaPenAlt,
  FaPencilAlt,
  FaTrashAlt,
  FaYandex,
} from "react-icons/fa";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  isLogin,
  onGetData,
  onPutData,
} from "../../views/apicalling";
import CourseTrack from "./coursetrack";
import Checkbox from "@material-ui/core/Checkbox";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root1: {
    width: 47,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 20,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#fff",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#fff",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid #fff`,
    backgroundColor: "#fff !important",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  card: {
    margin: 10,
    width: "1127px",
    maxWidth: "100vw",
    border: "0.5px transparent rgba(0, 0, 0, 0.5)",
    boxSizing: "border-box",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    padding: 20,
    [theme.breakpoints.down("sm")]: {},
  },
  pathicon: {
    background: "var(--primary)",
    borderRadius: "50%",
    padding: "2px 5px",
    margin: "0 10px",
  },
  pathleft: {
    float: "left",
    margin: "2% 0",
  },
  warrning: {
    padding: "20px 0",
    color: "#C4C4C4",
    fontSize: 12,
  },
  pathright: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  icon1: {
    color: "#fff",
  },

  r: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  table: {
    minWidth: 700,
    borderTop: "1px solid #e0e0e0",
    

    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },
  tablecontainer: {
    boxShadow: "none  !important",
  },
  outter: {
    padding: "0 4%",
  },
  path: {
    display: "flex",
    width: 383,
    height: 200,
    border: "0.3px solid white",
    boxSizing: "border-box",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: 5,
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "fit-content",
      width: "90%",
      alignItems: "center",
      margin: "auto",
    },
  },
  section: {
    margin: 7,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      margin: 10,
      alignItems: "center",
    },
  },
  picture: {
    width: 180,
    height: 150,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  bottombtn: {
    marginTop: "40%",
    display: "flex",
    marginLeft: "auto",
    justifyContent: "flex-end",
  },
  pathTitle: {
    fontSize: 24,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  pathBtn: {
    height: "fit-content",
    width: "fit-content",
    padding: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  topclass: {
    width: "95%",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.paper,
    color: "#5C0090",
    fontWeight: 600,
    fontSize: 16,
  },
  r: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  body: {
    fontSize: 14,
    color: "#4B4E54",
  },
  icon: {
    height: 30,
    width: 30,
    color: "var(--primary)",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(no, coursetitle, university, provider, remove) {
  return { no, coursetitle, university, provider, remove };
}

const rows = [
  createData(1, "Course Title", "University Name", "Provider Name", "Remove"),
];

function createDataFollow(no, coursetitle, remove) {
  return { no, coursetitle, remove };
}

const follow = [
  createDataFollow(1, "Data Science Courses ", "Remove"),
  createDataFollow(2, "Coursera Courses", "Remove"),
  createDataFollow(2, "IBM Courses", "Remove"),
];
export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [AllBookmarkData, setAllBookmarkData] = useState([]);
  const [AllAddToCourseData, setAllAddToCourseData] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const BookmarkEffect = async () => {
    await onPutData("api/user/bookmark/getAllData", {
      data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
    })
      .then((res) => {
        if (res.data.error == false) {
          console.log(res.data.data);
          setAllBookmarkData(res.data.data);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  const onClickAddToHandlerkHandaler = async (e, courseid) => {
    await onPutData("api/user/addToCourse", {
      data: cryptoEncrypt({
        user_id: cryptoDecrypt(cookies.get("__sdk")).id,
        course_id: courseid,
        ismark: false,
      }),
    })
      .then((res) => {
        if (res.data.error == false) {
          AddToCourseEffect();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const AddToCourseEffect = async () => {
    await onPutData("api/user/addToCourse/getAllData", {
      data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
    })
      .then((res) => {
        if (res.data.error == false) {
          console.log(res.data.data);
          setAllAddToCourseData(res.data.data);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  useEffect(() => {
    BookmarkEffect();
    AddToCourseEffect();
  }, []);
  const renderMobileView = (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs"
        centered
      >
        <Tab
          icon={<BsFillPersonLinesFill className={classes.icon} />}
          aria-label="course"
        />
        <Tab
          icon={<GiBlackFlag className={classes.icon} />}
          aria-label="path"
        />
        <Tab
          icon={<BsBookmarksFill className={classes.icon} />}
          aria-label="bookmark"
        />
        <Tab
          icon={<RiUserFollowFill className={classes.icon} />}
          aria-label="follow"
        />
      </Tabs>
    </Paper>
  );
  return (
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.sectionDesktop}>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="full width tabs"
              centered
            >
              <Tab label="My Courses" {...a11yProps(0)} />
              <Tab label="Course Path" {...a11yProps(1)} />
              <Tab label="Bookmarks" {...a11yProps(2)} />
              <Tab label="Follows" {...a11yProps(3)} />
            </Tabs>
          </Paper>
        </div>
        <div className={classes.sectionMobile}>{renderMobileView}</div>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ minWidth: "58vw" }}
        >
          <TabPanel
            value={value}
            index={0}
            dir={theme.direction}
            className={classes.outter}
          >
            <Typography
              style={{
                fontWeight: 600,
                fontSize: 18,
                margin: "1% 0",
                color: "#000",
              }}
            >
              Courses you are enrolled in :
            </Typography>

            <TableContainer
              component={Paper}
              className={classes.tablecontainer}
            >
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No. </StyledTableCell>
                    <StyledTableCell align="center">
                      Course Title
                    </StyledTableCell>
                    <StyledTableCell align="center">University</StyledTableCell>
                    <StyledTableCell align="center">Provider</StyledTableCell>
                    <StyledTableCell align="center">Remove</StyledTableCell>
                    <StyledTableCell align="center">Completed</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AllAddToCourseData.map((x, y) => (
                    <StyledTableRow key={y}>
                      <StyledTableCell component="th" scope="row">
                        {y + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.courseName.course_name}
                        <br />
                        <Link to={`/product/${x.courseName.course_slug}`}>
                          Go to course
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.universityName[0].name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.providerName[0].name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link>
                          {/* {row.remove} */}
                          <FaTrashAlt
                            onClick={(e) =>
                              onClickAddToHandlerkHandaler(e, x.courseName._id)
                            }
                          />
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Checkbox />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel
            value={value}
            index={1}
            dir={theme.direction}
            className={classes.outter}
          >
            <CourseTrack />
          </TabPanel>
          <TabPanel
            value={value}
            index={2}
            dir={theme.direction}
            className={classes.outter}
          >
            <Typography
              style={{
                fontWeight: 600,
                fontSize: 18,
                margin: "1% 0",
                color: "#000",
              }}
            >
              Courses you have bookmarked :
            </Typography>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No. </StyledTableCell>
                    <StyledTableCell align="center">
                      Course Title
                    </StyledTableCell>
                    <StyledTableCell align="center">University</StyledTableCell>
                    <StyledTableCell align="center">Provider</StyledTableCell>
                    <StyledTableCell align="center">Remove</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AllBookmarkData.map((x, y) => (
                    <StyledTableRow key={y}>
                      <StyledTableCell component="th" scope="row">
                        {y + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.courseName.course_name}
                        <br />
                        <Link to={`/product/${x.courseName.course_slug}`}>
                          Go to course
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.universityName[0].name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {x.providerName[0].name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link>
                          {/* {row.remove} */}
                          <FaTrashAlt />
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel
            value={value}
            index={3}
            dir={theme.direction}
            className={classes.outter}
          >
            <Typography
              style={{
                fontWeight: 600,
                fontSize: 18,
                textAlign: "center",
                margin: "1% 0",
                color: "#000",
              }}
            >
              Courses you are following :
            </Typography>
            <hr />

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>No. </StyledTableCell>
                    <StyledTableCell align="center">
                      Course List Title
                    </StyledTableCell>
                    <StyledTableCell align="center">Remove</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {follow.map((follow) => (
                    <StyledTableRow key={follow.no}>
                      <StyledTableCell component="th" scope="row">
                        {follow.no}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {follow.coursetitle}
                        <br />
                        <Link to="/course">Go to List</Link>
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        <Link>
                          <FaTrashAlt />
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}
