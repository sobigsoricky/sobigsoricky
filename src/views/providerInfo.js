import { Navbar, NavbarOther } from "./../components";
import { Container, Title } from "./../globalStyles";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Newfooter, Offerads } from "../components";

const Styles = makeStyles((theme) => ({
    acc : {
        border: '1px solid var(--primary)',
        borderRadius:'0px 0px 20px 20px !important',
        boxSizing: 'border-box',
       margin:'0 0 34px',

    },
    heading : {
        fontWeight:'800',
        color: 'var(--primary)',
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
          fontSize: '12px',

      },
    },
    accicon : {
        color: 'var(--primary)',
        [theme.breakpoints.down('sm')]: {
          fontSize: '20px',

      },
    },
    h1 : {
        color:'#000',
        margin: '0 0 30px'
    },
    p: {
        margin: '0 0 30px'
    },
}));

export default function ProviderInfo() {
  const classes = Styles();
  return (
    <>
      <Container>
      <NavbarOther />
        <h1 className={classes.h1}>WHAT IS COURSERA?</h1>
        <Typography className={classes.p}>
          Coursera is an online education provider that offers online courses,
          popularly known as MOOCs or Massive Open Online Courses, from top
          universities around the world. Currently it has over 200 partners from
          48 countries. These partners include Universities such as Stanford,
          Duke, Penn, Princeton, Michigan, Peking, and HEC Paris. Coursera has
          also started partnering with companies like IBM, Google, and PwC —
          these companies are also launching courses on Coursera. 
          </Typography>
          <Typography className={classes.p}>
          Coursera is
          the most popular MOOC provider in the world based on the number of
          students (over 76 million learners) and has an active catalog of
          6,000+ online courses. 
          </Typography>
          <Typography className={classes.p}>
          As well as these individual courses and 25
          online degrees, Coursera offers more than 500 groups of courses known
          as Specializations, MasterTracks, and Professional Certificates.
        </Typography>
        <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>HOW IT WORKS ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className={classes.accicon}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>ARE COURSERA COURSES FREE ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>HOW MUCH DOES IT COST ?  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>CAN I GET DEGREE FROM COURSERA ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>HOW COURSERA SUBSCRIPTION WORKS ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>WHAT ARE SPEACIALIZATION ?  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.acc}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.accicon} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>WHAT ARE THE BEST COURSERA COURSES ? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  );
}
