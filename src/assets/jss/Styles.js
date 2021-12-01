import { makeStyles } from "@material-ui/core";

export const Styles = makeStyles((theme) => ({
  typography: {
    color: "#777",
    textAlign: "left",
    maxWidth: 750,
    margin: "15px 0 20px 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      marginRight: "2%",
      marginLeft: "2%",
    },
  },
  searcharea: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    margin: "5% 0 2%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
      flexDirection: "column",
    },
  },
  related: {
    textAlign: "center",
  },
  coursecard: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  menulist: {
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    width: "fit-content",
    boxSizing: "border-box",
    textDecoration: "none",
    padding: "0 43px 0 0",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "auto",
    },
  },
  link: {
    color: "#777",
    textDecoration: "none",
    padding: "5px !important",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
    textAlign: "left",
    "&:hover": {
      transform: "scale(1.01)",
      transition: "all 0.1s",
    },
  },
  cataloglink: {
    color: "var(--primary)",
  },
  certificate: {
    maxWidth: "fit-content",
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  container: {
    marginTop: "100px",
    maxWidth: "100vw",
    marginRight: "12%",
    marginLeft: "12%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      marginRight: "2%",
    },
  },
  containerre: {
    marginTop: "100px",
    maxWidth: "100vw",
    marginRight: "auto",
    marginLeft: "5%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      marginRight: "2%",
    },
  },
  order: {
    display: "flex",
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftre: {
    minWidth: "370px",
    maxHeight: "467px",
    textAlign: "center",
    borderRight: "1px solid #C4C4C4",
    [theme.breakpoints.down("1281")]: {
      minWidth: "305px",
    },
  },
  leftreinner: {
    maxWidth: "334px",
    maxHeight: "467px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
    [theme.breakpoints.up("md")]: {
      margin: " 0 auto",
    },
  },
  titlere: {
    fontWeight: "300 !important",
    fontSize: "30px !important",
    lineHeight: "41px",
  },
  pre: {
    maxWidth: "267px",
    fontSize: "18px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  pdre: {
    maxWidth: "267px",
    fontSize: "18px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  },
  rightre: {
    marginLeft: "5%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  btnre: {
    margin: "2vw",
  },
  be: {
    width: "100%",
    position: "relative",
  },
  or: {
    fontSize: "18px",
    marginBottom: "20px",
    "&::before": {
      content: '" " ',
      position: "absolute",
      width: "75.01px",
      height: "0px",
      left: "195px",
      bottom: "50%",
      border: " 1px solid #000000",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    "&::after": {
      content: '" " ',
      position: "absolute",
      width: "75.01px",
      height: "0px",
      right: "195px",
      bottom: "50%",
      border: " 1px solid #000000",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
}));
