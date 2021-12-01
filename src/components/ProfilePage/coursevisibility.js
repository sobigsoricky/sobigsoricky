import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { purple } from "@material-ui/core/colors";
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
import { Btn } from "..";

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
  onPostData,
  onPutData,
} from "../../views/apicalling";
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
    color: "var(--primary)",
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
    },
    "&$checked + $track": {
      backgroundColor: purple[500],
      opacity: 1,
      border: "none",
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
    backgroundColor: "#fff",
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
  con: {
    flexWrap: "unset",
  },
}));
export default function CourseVisibility(props) {
  const classes = useStyles();
  const [cVisibility, setcVisibility] = useState(props.visibility);
  const onChangeVisibilityHandler = async (id) => {
    await onPostData("api/user/track/editTrackPathVisibility", {
      id: id,
      visibility: !cVisibility,
    })
      .then((res) => {
        if (res.data.error == false) {
          setcVisibility(!cVisibility);
        }
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className={classes.pathright}>
        <FormControlLabel
          label="Make Public"
          labelPlacement="start"
          control={
            <Switch
              classes={{
                root: classes.root1,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
              }}
              checked={cVisibility}
              onChange={() => onChangeVisibilityHandler(props.trackId)}
              name="Make Public"
            />
          }
        />
      </div>
    </>
  );
}
