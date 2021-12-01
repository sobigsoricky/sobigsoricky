import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import Btn from "../Button/Btn";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import { GoBook } from "react-icons/go";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { RiCloseCircleLine } from "react-icons/ri";

import { SearchBar } from "../HeroSection/HeroSecElements";
import {
  FaBookmark,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Search } from "./NavbarElement";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { cryptoDecrypt, isLogin, onGetData } from "../../views/apicalling";
import Cookies from "universal-cookie";
import { Searchbarnav } from "..";
import LoginModal from "../Signup/loginmodal";
import SignUpModal from "../Signup/Signup";
import img1 from "../../assets/img/logo4.png";
import UserContext from "../../context";

const cookies = new Cookies();

const useStyles = makeStyles((theme) => ({
  navsolid: {
    background: "#fff",
    color: "#5C0090",
  },
  btnsolid: {
    background: "#5C0090",
    color: "#fff",
  },
  root: {
    display: "flex",
    alignItems: "center",
  },
  nav: {
    background: (props) =>
      props.color === "transparent" ? "transparent" : "#fff",
    color: (props) => (props.color === "transparent" ? "#ffffff" : "#5C0090"),
    justifyContent: "center",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .1)",
    height: 80,
  },
  textfield: {
    borderRadius: "50px",
    border: "1px solid #802BB1",
    width: "100%",
    maxWidth: "100%",
    minWidth: "100%",
  },
  mainouter: {
    position: "relative",
    margin: "auto 2%",
    maxWidth: "80%",
    minWidth: "42%",
    [theme.breakpoints.up("1441")]: {
      minWidth: "30%",
    },
  },
  btns: {
    background: "#fff",
    color: "#5C0090",
  },
  toolbar: {
    // marginLeft: "7%",
    // marginRight: "7%",
    maxWidth: "100vw",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginRight: "0%",
    },
  },
  grow: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "start",
      width: "100%",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontSize: 17,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      color: "inherit",
      fontSize: 16,
      fontWeight: "normal",
    },
  },
  serachicon: {
    color: " var(--primary)",
    fontSize: "20px",
  },
  searchform: {
    position: "relative",
  },
  seracbtn: {
    position: "absolute",
    top: "8%",
    right: "0%",
  },

  paper: {
    padding: theme.spacing(2),
    color: "#777",
  },
  menuhover: {
    "&:hover": {
      color: "#5C0090",
    },
  },
  menulink: {
    textDecoration: "none",
    color: "inherit",
  },
  papermain: {
    maxHeight: "400px",
    height: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar ": {
      width: "13.18px",
      height: "103.61px",
    },
    "&::-webkit-scrollbar-track ": {
      background: "#FFF",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#BEBDBD",
      borderRadius: "5px",
      height: "103.61px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&::-webkit-scrollbar-button": {
      backgroundColor: "#AFAFAF",
      boxShodow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      borderRadius: "5px",
      width: " 13.18px",
      height: "12.3px",
    },
  },
  list: {
    margin: 5,
  },
  fullList: {
    width: "80vw",
  },
  coursenator: {
    width: 200,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  btn: {
    width: "120px",
    height: "50px",
    padding: "0 25px",
  },
  closeicon: {
    height: 20,
    width: 20,
  },
  trackhover: {
    padding: theme.spacing(1),
    color: "var(--grey)",
    opacity: "0.5",
  },

  suggestionul: {
    position: "absolute",
    background: "#fff",
    top: "50px",
    zIndex: "99",
    width: "97%",
    maxWidth: "460px",
    boxShadow: "8px 8px 20px #C4C4C4",
    borderRadius: " 0px 0px 20px 20px",
  },
  suggestionli: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
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

  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 51,
    margin: 4,
    background: "var(--primary)",
  },
  sbtn: {
    color: "#fff !important",
    padding: " 6px 8px !important",
    [theme.breakpoints.down("md")]: {
      padding: "0 12px",
    },
  },
}));

NavbarOther.propTypes = {
  color: PropTypes.oneOf(["transparent", "white"]).isRequired,
};

export default function NavbarOther(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { color, ...other } = props;
  const navclasses = useStyles(props);
  const contextType = useContext(UserContext);
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [isLoginModel, setIsLoginModel] = useState(false);
  const [isSignInModel, setIsSignInModel] = useState(false);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [nav, setNavbar] = React.useState("navsolid");
  const [btns, setBtns] = React.useState("btnsolid");

  const navRef = React.useRef();
  const btnRef = React.useRef();

  navRef.current = nav;
  btnRef.current = btns;
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavbar("nav");
      setBtns("btns");
    } else {
      setNavbar("navsolid");
      setBtns("btnsolid");
    }
  };

  const logoutHandle = () => {
    cookies.remove("token");
    cookies.remove("__sdk");
    window.location.href = "/";
  };

  window.addEventListener("scroll", changeBackground);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const active = Boolean(anchorEl);
  const id = active ? "tracks" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFade = () => {
    setAnchorEl(null);
  };

  const [AllSubject, setAllSubject] = useState([]);
  const [AllSubSubject, setAllSubSubject] = useState([]);

  useEffect(() => {
    if (contextType.AllSubject.lenght > 0) {
      setAllSubject(contextType.AllSubject);
    } else {
      onGetData("api/user/subject/getAllData")
        .then((res) => {
          setAllSubject(res.data.data);
        })
        .catch((error) => {
          console.log("Error");
        });
    }
    if (contextType.AllSubSubject.lenght > 0) {
      setAllSubSubject(contextType.AllSubSubject);
    } else {
      onGetData("api/user/subject/getAllSubSubject")
        .then((res1) => {
          setAllSubSubject(res1.data.data);
        })
        .catch((error) => {
          console.log("Error");
        });
    }
  }, []);

  const onClickLoginBtn = () => {
    setIsLoginModel(true);
  };
  const onClickSignInBtn = () => {
    setIsSignInModel(true);
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className="mobile-ul">
        {AllSubject.map((x, k) => {
          return (
            <li className="mobile-ul-li">
              <Link to={`/course/${x.slug}`}>{x.name}</Link>
              <div className="mobile-icon">
                <FaChevronRight
                  className="mobile-menu-icon-right"
                  // onClick={() => setActivemenu(!activeMenu)}
                />
              </div>
              <ul className="mobile_submenu">
                <MenuItem onClick={toggleDrawer(anchor, false)}>
                  <Link className={classes.closeicon}>
                    <RiCloseCircleLine className={classes.closeicon} />
                  </Link>
                </MenuItem>
                <li
                  className="mobile-submenu-li-exit"
                  onClick={toggleDrawer(anchor, false)}
                >
                  <FaChevronLeft className="mobile-menu-icon" />
                  <p>Exit</p>
                </li>

                {AllSubSubject.map((p, q) => {
                  if (x._id == p.parent_id && x._id != 0) {
                    if (p.name != "No Data") {
                      return (
                        <Link to={`/course/${p.slug}`} className="mobilelink">
                          <li
                            className="mobile-submenu-li"
                            onClick={toggleDrawer(anchor, false)}
                          >
                            <p>{p.name}</p>
                          </li>
                        </Link>
                      );
                    }
                  }
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link className={classes.link} to="/whataretracks">
          Tracks
        </Link>
      </MenuItem>
      <MenuItem>
        <Link className={classes.link} to="/blogs">
          Blog
        </Link>
      </MenuItem>
      {isLogin() == false ? (
        <>
          <MenuItem>
            <Link className={classes.link} onClick={() => onClickLoginBtn()}>
              Login
            </Link>
          </MenuItem>
        </>
      ) : (
        " "
      )}
      {isLogin() == false ? (
        <Btn className={`${classes.sbtn} `}>
          <Link className={classes.link} onClick={() => onClickSignInBtn()}>
            Sign Up
          </Link>
        </Btn>
      ) : null}
      {isLogin() == true ? (
        <>
          <MenuItem>
            <Link className={classes.link} to="/profile">
              Profile
            </Link>
          </MenuItem>
        </>
      ) : null}
      {isLogin() == true ? (
        <Btn
          color="white"
          className={`${classes.sbtn} ${classes.link} `}
          onClick={() => logoutHandle()}
          style={{ color: "#fff" }}
        >
          Logout{" "}
        </Btn>
      ) : null}
    </Menu>
  );
  console.log(isLoginModel);
  return (
    <>
      {isLoginModel == true ? <LoginModal getData={setIsLoginModel} /> : null}
      {isSignInModel == true ? (
        <SignUpModal getData={setIsSignInModel} />
      ) : null}
      <div className={classes.grow}>
        <AppBar
          position="fixed"
          className={clsx(navclasses.nav, classes[navRef.current])}
          {...other}
        >
          <Toolbar className={classes.toolbar}>
            <Link className={classes.link} to="/">
              <Typography className={classes.coursenator} variant="h1" noWrap>
                <img src={img1} className={classes.coursenator} />
              </Typography>
            </Link>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              {/* <div style={{position:'relative'}}>
      </div>
       */}
              <Searchbarnav classes={classes} />

              {/* <MenuItem>
               <SearchBar placeholder = "Search Thousands of Courses"/>  
              
            </MenuItem> */}
              <MenuItem style={{ overflow: "visible", marginLeft: "auto" }}>
                <ul className="menu1">
                  <li className="menulist">
                    <Link to="" className={classes.menulink}>
                      Courses
                    </Link>
                    <ul className="sub-menu">
                      {AllSubject.map((x, k) => {
                        if (x.name != "No Data") {
                          return (
                            <li className="sub-menu-list">
                              <Link
                                to={`/course/${x.slug}`}
                                className={classes.menulink}
                              >
                                {x.name}
                                {/* <hr class="linkhr"/> */}
                                <FaChevronRight className="mobile-menu-icon-right" />
                              </Link>

                              <ul className="sub-sub-menu">
                                {AllSubSubject.map((p, q) => {
                                  if (x._id == p.parent_id && x._id != 0) {
                                    if (p.name != "No Data") {
                                      return (
                                        <>
                                          <li className="sub-sub-menu-list">
                                            <Link
                                              to={`/course/${p.slug}`}
                                              className={classes.menulink}
                                            >
                                              {p.name}
                                              <FaChevronRight className="mobile-menu-icon-right" />
                                            </Link>
                                          </li>
                                        </>
                                      );
                                    }
                                  }
                                })}
                              </ul>
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </li>
                </ul>
              </MenuItem>

              <MenuItem className={classes.root}>
                <Link className={classes.link} to="/whataretracks">
                  Tracks
                </Link>
              </MenuItem>

              <MenuItem className={classes.root}>
                <Link className={classes.link} to="/blogs">
                  Blogs
                </Link>
              </MenuItem>

              {isLogin() == false ? (
                <>
                  <MenuItem>
                    <Link
                      className={classes.link}
                      onClick={() => onClickLoginBtn()}
                    >
                      Login
                    </Link>
                  </MenuItem>
                  <Divider className={classes.divider} orientation="vertical" />
                </>
              ) : (
                " "
              )}

              {isLogin() == false ? (
                <Btn className={`${classes.sbtn} `}>
                  <Link
                    className={classes.link}
                    onClick={() => onClickSignInBtn()}
                  >
                    Sign Up
                  </Link>
                </Btn>
              ) : null}
              {isLogin() == true ? (
                <>
                  <MenuItem>
                    <Link className={classes.link} to="/profile">
                      Profile
                    </Link>
                  </MenuItem>
                  <Divider className={classes.divider} orientation="vertical" />
                </>
              ) : null}
              {isLogin() == true ? (
                <Btn
                  color="white"
                  className={`${classes.sbtn} ${classes.link} `}
                  onClick={() => logoutHandle()}
                  style={{ color: "#fff" }}
                >
                  Logout{" "}
                </Btn>
              ) : null}
            </div>
            <div className={classes.sectionMobile}>
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      onClick={toggleDrawer(anchor, true)}
                      color="inherit"
                    >
                      <GoBook />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                      className="draw"
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>

              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </>
  );
}
