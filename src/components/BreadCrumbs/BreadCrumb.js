import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#777",
    textDecoration: "none",
    fontSize: "14.5px",
    "&:hover": {
      color: "#5C0090",
    },
  },
}));

export default function BreadCrumb() {
  const classes = useStyles();
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className={classes.link} to="/catalog">
          Catalog
        </Link>
        <Link className={classes.link} to="/catalog">
          Course Name
        </Link>
      </Breadcrumbs>
    </>
  );
}
