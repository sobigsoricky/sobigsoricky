import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles, makeStyles } from '@material-ui/core';

const StyledRating = withStyles((theme) => ({
  iconFilled: {
    color: 'var(--primary)',
  },
  iconHover: {
    color: 'var(--primary)',
  },
  root : {
    marginRight : "auto",
    [theme.breakpoints.down('xs')] : {
      fontSize : "21px",
    },
  },
}))(Rating);

const useStyles = makeStyles((theme) => ({
  root : {
    fontSize : "14px",
    color : "var(--primary)",
    fontWeight : 600,
  },
}))

export default function Pristine() {
  const classes = useStyles()
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography className = {classes.root} component="legend">Rate now :</Typography>
        <StyledRating name="pristine" value={null} />
      </Box>
    </div>
  );
}
