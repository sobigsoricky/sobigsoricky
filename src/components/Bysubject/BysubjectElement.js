const { makeStyles } = require("@material-ui/core")

export const useStyles = makeStyles((theme) => ({
  leftline: {
    position: "relative",
    fontWeight: "300 !important",
    margin: "4%",
    "&::before": {
      position: "absolute",
      width: "353px",
      height: "0px",
      left: "4%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      marginTop: "1.8%",
      [theme.breakpoints.down("md")]: {
        width: "25%",
        marginTop: "2.6%",
        left: "6%",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
        left: "6%",
        marginTop: "1.8%",
      },
    },
    "&::after": {
      position: "absolute",
      width: "100%",
      maxWidth: "353px",
      height: "0px",
      right: "4%",
      border: "1px solid #CA98E8",
      content: '" "',
      display: "block",
      top: "48%",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
      [theme.breakpoints.down("md")]: {
        top: "50%",
        right: "6%",
        width: "25%",
      },
      [theme.breakpoints.up("1500")]: {
        width: "100%",
        maxWidth: "30vw",
        right: "6%",
      },
    },
  },
  card: {
    width: "100%",
    maxWidth: "1284px",
    height: "322px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
    borderRadius: "25px",
    margin: "0 auto 5%",
    [theme.breakpoints.down("1282")]: {
      height: "280px",
      width: "97%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "100%",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "90%",
    },
  },
  ullist: {
    height: "320px",

    padding: "74px 41px",
    listStyle: "none",
    [theme.breakpoints.down("1282")]: {
      padding: "40px 28px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "54px 21px",

      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "34px 11px",

      height: "100%",
    },
  },
  lilist: {
    marginBottom: "7%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2%",
      margin: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 0 0 22%",
    },
  },
  lista: {
    textDecoration: "none",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "27px",
    color: "#8690A9",
    padding: "10px",
    [theme.breakpoints.down("1281")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      margin: "auto",
    },
  },
  container: {
    maxWidth: "100vw",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "15px",
    marginTop: "2% ",
    marginBottom: "2% ",
  },
}))
