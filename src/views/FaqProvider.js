import { Navbar, NavbarOther } from "./../components";
import { Container, Title } from "./../globalStyles";
import {
  Button,
  makeStyles,
  TextField,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from "./apicalling";

const Styles = makeStyles((theme) => ({
  des: {
    textAlign: "left",
    maxWidth: "836px",
    fontSize: 18,
    margin: "0 auto",
  },
  outer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
  },
  ccard: {
    maxWidth: 290,
    width: "100%",
    height: "190px",
    margin: "20px auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "226px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      maxWidth: "100%",
      minWidth: "100%",
    },
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    padding: "20px 0",
    fontWeight: "700",
  },
  title1: {
    color: "#EF2935",
  },
  title2: {
    color: "#DE4300",
  },
  title3: {
    color: "#F23E36",
  },
  title4: {
    color: "#108999",
  },

  p: {
    paddingLeft: "20px",
  },
  btnf: {
    width: "156px",
    height: "42px",
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    borderRadius: "5px",
    fontSize: "15px",
    margin: "0 auto",
    marginTop: "10px",
    color: "#fff",
  },
  btnf1: {
    background: "#EF2935",
    "&:hover": {
      background: "#EF2935",
    },
  },
  btnf2: {
    background: "#DE4300",
    "&:hover": {
      background: "#DE4300",
    },
  },
  btnf3: {
    background: "#F23E36",
    "&:hover": {
      background: "#F23E36",
    },
  },
  btnf4: {
    background: "#108999",
    "&:hover": {
      background: "#108999",
    },
  },
  mtitle: {
    margin: "15% 0 6% 0 !important",
  },
}));
export default function FaqProvider() {
  const classes = Styles();
  useEffect(()=>{
    googleAnalyticsAction();
})
  return (
    <>
      <Container className={classes.conatiner}>
        <NavbarOther />
        <Title className={classes.mtitle}>Providers FAQ</Title>
        <Typography className={classes.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          ornare nisi vehicula malesuada. Morbi rhoncus est
        </Typography>
        <div className={classes.outer}>
          <Grid container>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title1}`}>
                  COURSERA
                </h3>
                <div className={classes.p}>
                  <p>What is Coursera?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  {" "}
                  <Button className={`${classes.btnf} ${classes.btnf1}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title1}`}>edX</h3>
                <div className={classes.p}>
                  <p>What is edX?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf1}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title1}`}>UDEMY</h3>
                <div className={classes.p}>
                  <p>What is Udemy?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf1}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title2}`}>
                  PLURALSIGHT
                </h3>
                <div className={classes.p}>
                  <p>What is Pluralsight?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf2}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>

            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title2}`}>
                  FUTURELEARN
                </h3>
                <div className={classes.p}>
                  <p>What is Futurelearn?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf2}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title2}`}>
                  BLOCKCHAIN COUNCIL
                </h3>
                <div className={classes.p}>
                  <p>What is Blockchain Coincil?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf2}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title3}`}>
                  CODEACADEMY
                </h3>
                <div className={classes.p}>
                  <p>What is CodeAcademy?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf3}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>

            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title3}`}>UPGRAD</h3>
                <div className={classes.p}>
                  <p>What is UpGrad?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf3}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title3}`}>UPGRAD</h3>
                <div className={classes.p}>
                  <p>What is UpGrad?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf3}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title4}`}>
                  MAGOOSH
                </h3>
                <div className={classes.p}>
                  <p>What is Magoosh?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf4}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title4}`}>
                  EDUREKA
                </h3>
                <div className={classes.p}>
                  <p>What is Edureka?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf4}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xl={3} md={4} sm={6} xs={12}>
              <div className={classes.ccard}>
                <h3 className={`${classes.title} ${classes.title4}`}>
                  365 DATASCIENCE
                </h3>
                <div className={classes.p}>
                  <p>What is 365 DataScience?</p>
                  <p>How it works?</p>
                </div>
                <Link to="/providerinfo" className="text-center">
                  <Button className={`${classes.btnf} ${classes.btnf4}`}>
                    Find out more
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  );
}
