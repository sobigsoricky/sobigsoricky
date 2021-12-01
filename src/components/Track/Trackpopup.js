import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { Btn } from "./../../components";
import img from "../../assets/img/popup.png";
import Dialog from "@material-ui/core/Dialog";
import AlertNofitifation from '../notification/snackbars'

import { Title } from "../../globalStyles";
import { cryptoDecrypt, cryptoEncrypt, onPostData, onPutData } from "../../views/apicalling";
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const useStyles = makeStyles((theme) => ({
  card: {
    width: "556px",
    height: "416px",
    borderRadius: "50px",
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    position: "relative",
    "&:after": {
      content: '" "',
      position: "absolute",
      width: "81.01px",
      height: "0px",
      left: " 246px",
      bottom: "1%",
      border: "1px solid #802BB1",
    },
  },
  detail: {
    padding: "50px 42px",
  },
  p: {
    padding: "0 0 30px 0",
  },
  p1: {
    padding: "10px 0 0",
  },
  btn: {
    background: "#fff",
    border: "1px solid var(--primary)",
    color: "var(--primary)",
    boxShadow: "0px 4px 4px #DECDE8",
    borderRadius: "20px",
    margin: "16px 0 0",
  },
  innerdeatil: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
  },
  footer: {
    display: "flex",
    margin: "auto",
    position: "absolute",
    bottom: "2%",
    left: "40%",
  },
  footerbtn: {
    width: "115px",
  },
  input: {
    border: 'none',
    width: '100%'
  }
}));
function Trackpopup(props) {
  const classes = useStyles();
  const inputfile = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [imagePre, setImagePre] = useState(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('default');
  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);    
  };
  const onButtonClick = () => {
    inputfile.current.click();
  }
  const handleImage = (event) => {
    let file = event.target.files[0];
    console.log(file);
    setImage(file);
    setImagePre(URL.createObjectURL(file))

  }
  const onSubmitClick = () => {

    let data = new FormData();
    data.set('name', name);
    data.set('photo', image);
    data.set('visibility', false);
    data.set('uid', cryptoDecrypt(cookies.get('__sdk')).id);
    onPostData('api/user/track/addTrackPath', data).then((res) => {
      if (res.data.error == false) {
        setOpen(false);
        setNotificationOpen(true);
        setNotificationMessage(res.data.message);
        setNotificationType('success');
        props.setData(true);

      }
      else {
        setNotificationOpen(true);
        setNotificationMessage(res.data.message);
        setNotificationType('error');
      }
    }).catch((error) => {
      setNotificationOpen(true);
      setNotificationMessage('Error');
      setNotificationType('error');
    });
  }
  const setReturnData = (data) => {

    setNotificationOpen(data.isOpen);
    setNotificationMessage(data.message);
    setNotificationType(data.type);

  }

  
  return (
    <>
      {notificationOpen === true ? <AlertNofitifation isOpen={notificationOpen} message={notificationMessage} setData={setReturnData} type={notificationType} /> : ''}
      <Btn className={classes.pathBtn} onClick={handleClickOpen}>
        Create new Track
      </Btn>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={classes.card}>
          <Title className={classes.title}>TRACK DETAILS</Title>
          <form className={`${classes.detail} ${classes.root}`} autoComplete="off">
            <p className={classes.p}>Track name*</p>
            <input type="text" onChange={(e) => setName(e.target.value)} required className={classes.input} />
            <hr />
            <p className={classes.p1}>Track image</p>
            <div className={classes.innerdeatil}>

              <Btn onClick={onButtonClick} className={classes.btn}>UPLOAD IMAGE</Btn>
              <input type="file" id="file" onChange={(e) => { handleImage(e) }} ref={inputfile} style={{ display: 'none' }} />
              <img src={imagePre != null && imagePre != '' ? imagePre : img} className={classes.img} height={100} width={100} />
            </div>
            <div className={classes.footer}>

              <Btn onClick={e => onSubmitClick(e)} className={classes.footerbtn}>Add</Btn>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}

export default Trackpopup;
