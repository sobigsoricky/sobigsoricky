import React from "react";
import { Btn } from "./../index";
import { Button, Title } from "../../globalStyles";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Img1, Img2, Img3 } from "./Whataretrackselements";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  track: {
    marginTop: "150px",
    marginLeft: "5%",
    marginRight: "5%",
  },
  title: {
    textAlign: "center",
    fontSize: "32px !important",
    margin: "5% 0",
  },
  card: {
    height: "340px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: "50px",
  },
  smallcards: {
    margin: "5% 15%",
  },
  btitle: {
    textAlign: "center",
    margin: "30px 0px 30px 0px",
    fontWeight: "bold",
    fontSize: "20px",
  },
  p: {
    textAlign: "center",
    margin: "10px auto 30px",
    maxWidth: "220px",
    fontSize: "18px",
    height: "90px",
  },
  svg: {
    display: "block",
    margin: "0 auto",
    marginBottom: "20px",
  },
  img: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
  },
  btn: {
    display: "block",
    margin: "auto",
    padding: "5px 10px",
  },
  bigCards: {
    marginTop: "50px",
    marginBottom: "25px",
    marginLeft: "5%",
    marginRight: "5%",
  },
  data: {
    fontWeight: "300",
    fontSize: "20px",
    lineHeight: "35px",
    marginBottom: "2%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  cardTitle: {
    fontSize: "28px !important",
    textAlign: "left !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "23px !important",
    },
  },
  rowrev: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  subtitle: {
    fontSize: "28px !important",
    fontWeight: "300 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "17px !important",
    },
  },
}));

export default function Whataretracksmain() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.track}>
        <Title className={classes.title}>Welcome to Tracks</Title>
        <Title className={classes.subtitle}>
          GETTING TO THE DESTINATION BECOMES EASY WHEN THE PATH IS PAVED
        </Title>
        <h3 className={classes.data}>
          To make your learning journey easy and to help you reach your
          destination Coursenator brings to you the "Tracks" feature.
        </h3>
        <h3 className={classes.data}>
          The "Tracks" feature helps our users to create their own learning
          paths, customize them at any time and share their paths with other
          users. In order to help our users more, we have brought “Professional
          Tracks” which are made after intense research by our team and under
          the guidance of professionals working in different fields.
        </h3>
        <h3 className={classes.data}>
          <b>
            Note: To get full access to our Tracks feature, make sure that you
            have a user account on Coursenator.
          </b>
        </h3>
      </div>
      <div className={classes.smallcards}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <div className={classes.card}>
              <svg
                className={classes.svg}
                width="70"
                height="57"
                viewBox="0 0 70 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M67.8125 14.1872H56.875V23.0542C56.875 23.202 56.8522 23.3128 56.8066 23.3867C56.7155 23.7931 56.4762 24.1348 56.0889 24.4119C55.7015 24.689 55.2344 24.8276 54.6875 24.8276H43.75V33.6946C43.75 33.8423 43.7272 33.9532 43.6816 34.0271C43.5905 34.4335 43.3512 34.7752 42.9639 35.0523C42.5765 35.3294 42.1094 35.4679 41.5625 35.4679H30.625V44.3349C30.625 44.4827 30.6022 44.5936 30.5566 44.6674C30.4655 45.0739 30.2262 45.4156 29.8389 45.6927C29.4515 45.9698 28.9844 46.1083 28.4375 46.1083H17.5V54.9753C17.5 55.1231 17.4772 55.2339 17.4316 55.3078C17.3405 55.7142 17.1012 56.056 16.7139 56.3331C16.3265 56.6102 15.8594 56.7487 15.3125 56.7487H2.1875C1.59505 56.7487 1.08236 56.5732 0.649414 56.2222C0.216471 55.8713 0 55.4556 0 54.9753C0 54.495 0.216471 54.0794 0.649414 53.7284C1.08236 53.3774 1.59505 53.2019 2.1875 53.2019H13.125V44.3349C13.125 44.1872 13.1478 44.0763 13.1934 44.0024C13.2845 43.596 13.5352 43.2543 13.9453 42.9772C14.3555 42.7001 14.8112 42.5615 15.3125 42.5615H26.25V33.6946C26.25 33.5468 26.2728 33.4359 26.3184 33.362C26.4095 32.9556 26.6602 32.6139 27.0703 32.3368C27.4805 32.0597 27.9362 31.9212 28.4375 31.9212H39.375V23.0542C39.375 22.9433 39.3978 22.8325 39.4434 22.7217C39.5345 22.3153 39.7852 21.9735 40.1953 21.6964C40.6055 21.4193 41.0612 21.2808 41.5625 21.2808H52.5V12.4138C52.5 12.266 52.5228 12.1552 52.5684 12.0813C52.6595 11.6749 52.8988 11.3331 53.2861 11.056C53.6735 10.7789 54.1406 10.6404 54.6875 10.6404H67.8125C68.4049 10.6404 68.9176 10.8159 69.3506 11.1669C69.7835 11.5178 70 11.9335 70 12.4138C70 12.8941 69.7835 13.3097 69.3506 13.6607C68.9176 14.0117 68.4049 14.1872 67.8125 14.1872ZM32.8125 21.2808H28.4375C27.8451 21.2808 27.3324 21.1053 26.8994 20.7543C26.4665 20.4033 26.25 19.9877 26.25 19.5074V12.2475L6.9043 27.8756C6.44857 28.2081 5.91309 28.3744 5.29785 28.3744C4.68262 28.3744 4.16992 28.2081 3.75977 27.8756L0.615234 25.3263C0.205078 24.9938 0 24.5782 0 24.0794C0 23.5806 0.205078 23.165 0.615234 22.8325L20.166 7.09359H10.9375C10.3451 7.09359 9.83236 6.9181 9.39941 6.56711C8.96647 6.21613 8.75 5.80049 8.75 5.32019V1.7734C8.75 1.2931 8.96647 0.877462 9.39941 0.526477C9.83236 0.175492 10.3451 0 10.9375 0H32.8125C33.4049 0 33.9176 0.175492 34.3506 0.526477C34.7835 0.877462 35 1.2931 35 1.7734V19.5074C35 19.9877 34.7835 20.4033 34.3506 20.7543C33.9176 21.1053 33.4049 21.2808 32.8125 21.2808Z"
                  fill="#B170D7"
                />
              </svg>
              <Typography variant="h5" className={classes.btitle}>
                Follow our tracks
              </Typography>
              <p className={classes.p}>
                These tracks are made by e-learning experts and are curated to
                your benefit.
              </p>
              <Link to="/followexperttrack">
                <Btn className={classes.btn}>See Tracks</Btn>
              </Link>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.card}>
              <svg
                className={classes.svg}
                width="70"
                height="57"
                viewBox="0 0 70 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.3498C0 7.07942 2.73 2.61045 7 0C7 2.39764 9.415 5.67488 14 5.67488C16.7848 5.67488 19.4555 6.57172 21.4246 8.16809C23.3938 9.76446 24.5 11.9296 24.5 14.1872C24.5 15.2825 24.22 16.321 23.758 17.28C26.348 18.9655 28.924 20.6566 31.423 22.4158L24.15 28.3177C21.995 26.2761 19.8865 24.2025 17.8255 22.098C16.6355 22.4725 15.3545 22.6995 14 22.6995C6.265 22.6995 0 17.6205 0 11.3498ZM42.532 30.7806L47.222 26.9784C49.3977 27.883 51.8049 28.3611 54.25 28.3744C58.4272 28.3744 62.4332 27.0292 65.3869 24.6346C68.3406 22.2401 70 18.9923 70 15.6059C70 13.5488 69.342 11.6335 68.2745 9.91118L56 19.8621L49 14.1872L61.2745 4.2363C59.1009 3.32958 56.6945 2.85037 54.25 2.83744C50.0728 2.83744 46.0668 4.18269 43.1131 6.57725C40.1594 8.9718 38.5 12.2195 38.5 15.6059C38.5 17.6631 39.158 19.5784 40.2255 21.3007L3.5 51.074L10.5 56.7488L34.468 37.318C41.0607 42.8012 48.0459 47.9648 55.3875 52.7821L60.375 56.0395L65.625 51.7833L61.6 47.74C55.6622 41.7869 49.2951 36.1238 42.532 30.7806Z"
                  fill="#B170D7"
                />
              </svg>
              <Typography variant="h5" className={classes.btitle}>
                Customize your learning path
              </Typography>
              <p className={classes.p}>
                You can make your track (Learning Journey) here!.
              </p>
              <Link to="/customizeyourpath">
                <Btn className={classes.btn}>Start Customizing</Btn>
              </Link>
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <div className={classes.card}>
              <svg
                className={classes.svg}
                width="60"
                height="50"
                viewBox="0 0 60 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56.2497 13.85H43.008V2.5C43.008 1.83696 42.7007 1.20107 42.1537 0.732233C41.6068 0.263392 40.8649 0 40.0913 0H3.74967C2.97613 0 2.23426 0.263392 1.68728 0.732233C1.1403 1.20107 0.833008 1.83696 0.833008 2.5V33.65C0.833008 34.313 1.1403 34.9489 1.68728 35.4178C2.23426 35.8866 2.97613 36.15 3.74967 36.15H16.9913V47.5C16.9913 48.163 17.2986 48.7989 17.8456 49.2678C18.3926 49.7366 19.1345 50 19.908 50H56.2497C57.0232 50 57.7651 49.7366 58.3121 49.2678C58.8591 48.7989 59.1663 48.163 59.1663 47.5V16.35C59.1663 15.687 58.8591 15.0511 58.3121 14.5822C57.7651 14.1134 57.0232 13.85 56.2497 13.85ZM53.333 45H22.8247V33.65C22.8247 32.987 22.5174 32.3511 21.9704 31.8822C21.4234 31.4134 20.6816 31.15 19.908 31.15H6.66634V5H37.1747V16.35C37.1747 17.013 37.482 17.6489 38.0289 18.1178C38.5759 18.5866 39.3178 18.85 40.0913 18.85H53.333V45Z"
                  fill="#B170D7"
                />
              </svg>
              <Typography variant="h5" className={classes.btitle}>
                See Other’s Tracks
              </Typography>
              <p className={classes.p}>
                See what others are learning. View our track gallery to find the
                best tracks.
              </p>
              <Link to="/trackgallery">
                <Btn className={classes.btn}>Go To Track Gallery</Btn>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.bigCards}>
        <Grid container spacing={3} className={classes.rowrev}>
          <Grid item xs={12} md={6}>
            <Title className={classes.cardTitle}>
              What are Professionally made tracks ?
            </Title>
            <br></br>
            <br></br>
            <h3 className={classes.data}>
              Professionally made tracks are the expert tracks that are made
              after intense research by our team. If you are a beginner and
              don't know how & where to start, these tracks are made for you.
              These tracks help you master the desired skill/skills by guiding
              you on which course to choose. Also, users can customize the track
              at any time.
            </h3>
            <Link to="/followexperttrack">
              <Button>Learn more</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Img1 className={classes.img} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.bigCards}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Img2 className={classes.img} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Title className={classes.cardTitle}>
              What is “Customizing your own learning path” ?
            </Title>
            <br></br>
            <br></br>
            <h3 className={classes.data}>
              'Customizing your own track' feature gives access to our users to
              customize their own learning paths by choosing and arranging the
              courses that would help them reach their goals. Users can use the
              drag and drop method to put the courses in the desired order after
              the courses get added to the track.
            </h3>
            <Link to="/customizeyourpath">
              <Button>Learn more</Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className={classes.bigCards}>
        <Grid container spacing={3} className={classes.rowrev}>
          <Grid item xs={12} md={6}>
            <Title className={classes.cardTitle}>What is Track Gallery ?</Title>
            <br></br>
            <br></br>
            <h3 className={classes.data}>
              The Track Gallery is a collection of tracks that our users make.
              If you feel confused or find it challenging to make your learning
              path, then track gallery is for you. You can look for various
              tracks in the track gallery and select the most suitable track for
              you. After the track gets added to your course path, you can make
              desired changes in it.
            </h3>
            <Link to="/trackgallery">
              <Button>Learn more</Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Img3 className={classes.img} />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
