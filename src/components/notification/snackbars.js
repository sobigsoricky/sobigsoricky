import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function IntegrationNotistack(props) {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const [open, setOpen] = React.useState(props.isOpen);
  const handleClose = () => {
    setOpen(false);
  };
  const { vertical, horizontal } = state;
  if(open!==props.isOpen){
    
    props.setData({
      isOpen:open,
      message:'',
      type:'info'   
    })
  } 
  return (
    <>
      <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.type}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
}
