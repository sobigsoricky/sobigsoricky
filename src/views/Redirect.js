import React from "react";
import { makeStyles } from "@material-ui/core";
import { Redirectgif } from "../components/index";


const useStyle = makeStyles((theme) => ({
  redirect: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(259.77deg, #FFFFFF 7.13%, #8F00FF 57.64%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Redirect(props) {
  const classes = useStyle();

  return (
    <div className={classes.redirect}>
      <Redirectgif {...props}/>
    </div>
   
  );
}

export default Redirect;
