import { makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import Datascientistimg from "../../assets/img/datascientist.jpg";
import Btn from "../Button/Btn";

const useStyle = makeStyles((theme) => ({
  card: {
    boxSizing: "border-box",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    position: "relative",
    maxWidth: "76%",
    margin: "20px auto",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "70%",
      marginBottom: "5%",
    },
  },

  image: {
    width: "100%",
    maxWidth: "341px",
    maxHeight: "255px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "1px 1px 40px 40px",
    display: "block",
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      maxHeight: "175px",
    },
  },
  title: {
    textAlign: "center",
    textDecoration: "none",
    color: "var(--grey)",
    marginBottom: "5px",
    marginTop: "5%",
    "&:hover": {
      color: "var(--primary)",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  btns: {
    display: "flex",
    marginBottom: "5%",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      marginTop: "10%",
    },
  },
  btn1: {
    fontSize: "20px",
    padding: "2px 10px",
    height: "47px",
    width: "184px",
    background: "none",
    color: "#802BB1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: " -25px",
      marginBottom: "10px",
      fontSize: "18px",
    },
  },
  btn2: {
    fontSize: "14px",

    height: "47px",

    marginBottom: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: " -25px",
      marginBottom: "10px",
      fontSize: "18px",
      height: "38px",
    },
  },
  icon: {
    backgroundColor: "#802BB1",
    width: "30px",
    height: "auto",
    color: "white",
    borderRadius: "10%",
    position: "absolute",
    top: "0px",
    right: "0px",
  },
  count: {
    padding: "3px",
    textAlign: "center",
  },
}));
export default function DatascientistCard(props) {
  const classes = useStyle();

  // let stringToBase64 =Buffer(data).toString('base64');
  // let base64ToString = Buffer.from(stringToBase64, "base64").toString();

  return (
    <>
      <Card className={classes.card}>
        <img
          height={375}
          width={500}
          className={classes.image}
          src={props.data.track_image}
        ></img>
        <div className={classes.icon}>
          <p className={classes.count}>1k+</p>
        </div>
        <Typography className={classes.title}>
          {props.data.track_name}
        </Typography>
        <div className={classes.btns}>
          <h4 className={classes.btn1}>{props.data.userdata[0].name}</h4>
          <Link
            to={`viewtrack?p=${Buffer(props.data._id).toString("base64")}`}
            className={classes.btn2}
          >
            <Btn>View</Btn>
          </Link>
        </div>
      </Card>
    </>
  );
}
