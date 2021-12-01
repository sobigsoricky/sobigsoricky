const { makeStyles } = require("@material-ui/core")

export const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100vw",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "15px",
  },
  gridcontainer: {
    marginBottom: "3%",
  },
  row: {
    margin: "5px",
    display: "flex",
    marginRight: "0px",
    [theme.breakpoints.down("986")]: {
      flexDirection: "column",
    },
  },
  card: {
    width: "min-content",
    minWidth: "225px",
    height: "283px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
  },
  cardinfo: {
    margin: "5px",
  },
  img: {
    width: "100%",
    height: "124px",
    borderRadius: "10px 10px 0 0",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  detail: {
    padding: "13px",
  },
  detailtitle: {
    fontSize: "18px",
    fontWeight: 400,
    color: "#4B4E54",
    textTransform: "capitalize",
    padding: "0 0 6px",
  },
  university: {
    fontSize: "12px",
    fontWeight: 300,
    color: "#4B4E54",
    textTransform: "capitalize",
    padding: "0 0 11px",
    display: "flex",
  },
  level: {
    fontSize: "12px",
    fontWeight: 300,
    color: "#4B4E54",
    textTransform: "capitalize",
    display: "flex",
  },
  icon: {
    color: "#E1BEF5",
    margin: "0 5px 0 0",
    fontSize: "14px",
  },

  breakpoints: {
    display: "flex",
    [theme.breakpoints.down("496")]: {
      flexDirection: "column",
    },
  },
  leftline: {
    position: "relative",
    fontWeight: "300 !important",

    "&::before": {
      position: "absolute",
      width: "353px",
      height: "0px",
      left: "2%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      marginTop: "1.8%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("1281")]: {
        width: "25%",
        left: "8%",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
        left: "2%",
        marginTop: "1.8%",
      },
    },
    "&::after": {
      position: "absolute",
      width: "353px",
      height: "0px",
      right: "2%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      top: "48%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },

      [theme.breakpoints.down("1281")]: {
        width: "25%",
        top: "50%",
        right: "8%",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
      },
    },
    margin: "5%",
  },
  topcourse: {
    marginTop: "2%",
    marginBottom: "-1.8%",
  },
}))
