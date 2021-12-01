import React, { useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { Icon } from '@iconify/react';
import { makeStyles } from '@material-ui/core'
import Btn from "../Button/Btn";
import ShareIcon from "@material-ui/icons/Share";
import { Link } from 'react-router-dom';
import bxsShareAlt from "@iconify-icons/bx/bxs-share-alt";


const useStyles = makeStyles((theme) => ({
  dialog: {
    maxwidth: 700,
  },
  ratingLinks: {
    textDecoration: "none",
    color: "var(--primary)",
    display: "flex",
    alignItems: "center",
  },
  ratingIcon: {
    width: "24px",
    height: "24px",
    marginRight: "7px",
    color: "var(--primary)",
  },
  title: {
    color: '#802BB1',
    fontFamily: 'Sora',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'underline',
    padding: '18px 0 0 27px'
  },
  iconwarp: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: 500,
    width: '75%',
    margin: '9.5% auto',
  },
  iconbox: {
    width: 60,
    height: 60,
    border: '1px solid #802BB1',
    borderRadius: '50%',
    boxSizing: 'border-box',
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    color: '#802BB1',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '50px 0'
  },
  url: {
    width: '456px',
    height: '43px',
    borderRadius: '50px',
    border: '1px solid #802BB1',
    padding: '0 10px'
  },
  copy: {
    width: 144,
    borderRadius: '50px',
    background: '#802BB1 !important'
  },
  btn: {
    fontSize: "14px",
    cursor: 'pointer !important',
    padding: "2px 10px",
    height: "fit-content",
    width: "fit-content",
    marginBottom: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },

}))
function Share(props) {
  console.log(props.location.pathname);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles()
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('Copied!');
  };
  return (
    <>

      <Link onClick={handleClickOpen} className={classes.ratingLinks}>
        <ShareIcon className={classes.ratingIcon} />
        Share Course
      </Link>

      <div className="outterwrap">
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth="xl"
          className='dialog'
        >
          <h2 className={classes.title}>SHARE VIA</h2>
          <DialogContent>
            {props.location.pathname ?
              <div className={classes.outter}>
                <div className={classes.iconwarp}>
                  <a href={`http://twitter.com/share?text=Coursenator&url=${window.location.hostname + props.location.pathname + props.location.search}`}>
                    <div className={classes.iconbox}>
                      <Icon icon="iconoir:twitter" className={classes.icon} />
                    </div>
                  </a>
                  <div className={classes.iconbox}>
                    <a href={`mailto:info@example.com?&subject=&cc=&bcc=&body=${window.location.hostname + props.location.pathname + props.location.search}`} target="_blank"> <Icon icon="ic:outline-email" className={classes.icon} /> </a>

                  </div>
                  <div className={classes.iconbox}>
                    <Icon icon="bi:instagram" className={classes.icon} />
                  </div>
                  <div className={classes.iconbox}>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.hostname + props.location.pathname + props.location.search}`} target="_blank"><Icon icon="lucide:linkedin" className={classes.icon} /></a>
                  </div>
                  <div className={classes.iconbox}>
                    <a href={`https://api.whatsapp.com/send?text=${window.location.hostname + props.location.pathname + props.location.search}`} target="_blank"> <Icon icon="bx:bxl-whatsapp" className={classes.icon} /></a>

                  </div>
                </div>
                <div className={classes.form}>
                  <input ref={textAreaRef} type="url" name="url" value={window.location.hostname + props.location.pathname + props.location.search} className={classes.url} />
                  <Btn onClick={copyToClipboard} className={classes.copy} >{copySuccess != '' ? copySuccess : 'Copy'}</Btn>
                </div>
              </div>
              : ''}
          </DialogContent>
        </Dialog>

      </div>
    </>
  );
}

export default Share;
