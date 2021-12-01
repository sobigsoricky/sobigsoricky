import React from "react"
import Rating from "@material-ui/lab/Rating"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { withStyles, makeStyles } from "@material-ui/core"

const StyledRating = withStyles((theme) => ({
  iconFilled: {
    color: "#B170D7",
  },
  iconHover: {
    color: "var(--primary)",
  },
  root: {
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16.5px",
    },
  },
}))

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "14px",

    color: "#000",
    fontWeight: 600,
    alignItems: "center",
    textAlign: "center",
  },
  bg: {
    padding: "2px 5px",
    borderRadius: "5px",
  },
}))

export default function Searchrating(props) {
  const classes = useStyles()
  return (
    <>
      <Box component='fieldset' borderColor='transparent'>
        {/* <Typography className = {classes.root} component="legend">Rating :</Typography> */}
        <StyledRating
          name='read-only'
          className={classes.bg}
          value={props.rating}
          precision={0.5}
          readOnly
        />
      </Box>
    </>
  )
}
