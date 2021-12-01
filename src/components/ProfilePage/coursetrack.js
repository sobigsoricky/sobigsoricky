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
import { Link } from "react-router-dom";
import img from "./../../assets/img/hero-bg.png";
import { Btn } from "./../../components";
import CourseVisibility from "./coursevisibility";
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
  onGetData,
  onPutData,
} from "../../views/apicalling";
import Cookies from "universal-cookie";
import Trackpopup from "../Track/Trackpopup";
import { Icon } from "@iconify/react";

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
    padding: "5px",
    margin: "0 10px",
    display: "flex",
  },
  pathleft: {
    float: "left",
    margin: "2% 0",
    display: "flex",
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
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },
  path: {
    display: "flex",
    width: 383,
    height: 200,
    border: "0.3px solid white",
    boxSizing: "border-box",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    margin: "auto",
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
    width: "80%",
    margin: "auto",
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

  nopathTitle: {
    fontFamily: "Sora",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",

    color: "#4B4E54",
  },
  notrackp: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#AFAFAF",
    paddingTop: "2%",
  },
  innertrack: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20% 0",
  },
  icondiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function CenteredTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [AllTrackPathData, setAllTrackPathData] = useState([]);
  const { name } = cryptoDecrypt(cookies.get("__sdk"));

  const TrackPathEffect = async () => {
    await onPutData("api/user/track/getTrackPath", {
      data: cryptoEncrypt({ id: cryptoDecrypt(cookies.get("__sdk")).id }),
    })
      .then((res) => {
        if (res.data.error == false) {
          console.log(res.data.data);
          setAllTrackPathData(res.data.data);
        }
      })
      .catch((error) => {
        console.log("Error");
      });
  };
  useEffect(() => {
    TrackPathEffect();
  }, []);

  const onClickTrackDeleteHandle = async (id, name) => {
    if (
      window.confirm('Are you sure delete "' + name.toUpperCase() + '" track?')
    ) {
      await onPutData("api/user/track/deleteTrackPath", { id: id })
        .then((res) => {
          if (res.data.error == false) {
            TrackPathEffect();
          }
        })
        .catch((error) => {
          console.log("Error");
        });
    }
  };
  const setReturnData = (data) => {
    if (data == true) {
      TrackPathEffect();
    }
  };
  return (
    <>
      <div className={`r ${classes.r}`}>
        <Grid container className={classes.con}>
          {AllTrackPathData.length > 0 ? (
            AllTrackPathData.map((x, y) => (
              <Grid item md={6}>
                <div className={classes.path1}>
                  <div className={classes.path}>
                    <div className={classes.section}>
                      <img
                        src={x.track_image ? x.track_image : img}
                        className={classes.picture}
                        alt="path"
                      />
                    </div>
                    <div className={classes.section}>
                      <Typography>{x.track_name.toUpperCase()}</Typography>
                      <Typography className={classes.pathTitle}>
                        {name}
                      </Typography>
                      <Link
                        to={`viewtrack?p=${Buffer(x._id).toString("base64")}`}
                      >
                        <Btn className={classes.pathBtn}>View Course Path</Btn>
                      </Link>
                    </div>
                  </div>
                  <div className={classes.topclass}>
                    <div className={classes.pathleft}>
                      <Link className={classes.pathicon}>
                        <FaPen className={classes.icon1} />
                      </Link>
                      <Link
                        onClick={() =>
                          onClickTrackDeleteHandle(x._id, x.track_name)
                        }
                        className={classes.pathicon}
                      >
                        <FaTrashAlt className={classes.icon1} />
                      </Link>
                    </div>
                    <CourseVisibility
                      trackId={x._id}
                      visibility={x.track_visibility}
                    />
                  </div>
                </div>
              </Grid>
            ))
          ) : (
            <>
              <div className={classes.notrack1}>
                <Typography className={classes.nopathTitle}>
                  Recently created Tracks will be shown here
                </Typography>
                <hr />
                <div className={classes.notrack}>
                  <p className={classes.notrackp}>
                    You havn’t created any Track yet.
                  </p>
                  <div className={classes.innertrack}>
                    <div className={classes.icondiv}>
                      <Icon
                        icon="ic:baseline-track-changes"
                        style={{ fontSize: "75px", color: "#C4C4C4" }}
                      />
                      <Trackpopup setData={setReturnData} />
                    </div>
                    <div className={classes.icondiv}>
                      <Icon
                        icon="ic:round-follow-the-signs"
                        style={{ fontSize: "75px", color: "#C4C4C4" }}
                      />
                      <Btn>Follow other’s Track</Btn>
                    </div>
                    <div className={classes.icondiv}>
                      <Icon
                        icon="la:chalkboard-teacher"
                        style={{ fontSize: "75px", color: "#C4C4C4" }}
                      />
                      <Btn>Follow Expert Track</Btn>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Grid>
        {AllTrackPathData.length > 0 ? (
          <div className={classes.bottombtn}>
            <Trackpopup setData={setReturnData} />
            <Btn className={classes.pathBtn}>Follow other’s Track</Btn>
            <Btn className={classes.pathBtn}>Follow expert Track</Btn>
          </div>
        ) : null}
      </div>
    </>
  );
}
