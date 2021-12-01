import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Btn = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'secondary'
      ? 'linear-gradient(45deg, #2D283E 30%, #2D283E 90%)'
      : 'linear-gradient(45deg, #5C0090 30%, #5C0090 90%)',
  border: 0,
  borderRadius: 5,
  boxShadow: (props) =>
    props.color === 'secondary'
      ? '0 3px 5px 2px rgba(45, 40, 62, .2)'
      : '0 3px 5px 2px rgba(92, 0, 144, .2)',
  color: 'white',
  height: 40,
  padding: '0 30px',
  margin: 8,
  fontWeight : 600,
  textTransform : "none",
});

export default Btn
