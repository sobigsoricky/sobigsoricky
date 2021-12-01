import { Navbar, NavbarOther } from "../components";
import React, { useEffect } from "react";
import { Container, Title } from "../globalStyles";
import {
  makeStyles,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from "./apicalling";


const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "100vw",
    width: "100%",
    margin: "auto",
    marginLeft: "0 !important",
    marginRight: "0 !important",
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto 15%",
    },
  },
  mtitle: {
    margin: "15% 0 6% 0 !important",
  },
  question: {
    fontWeight: 600,
    color: "#000",
    marginBottom: "5px",
    fontSize: 16,
    lineHeight: "27px",
    wordSpacing: 3,
  },
  answer: {
    marginBottom: "38px",
    width: "90%",
    lineHeight: "27px",
    fontSize: 16,
    wordSpacing: 3,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  outer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  ccard: {
    maxWidth: "267px",
    minWidth: "267px",

    maxHeight: "190px",
    width: "100%",
    height: "100%",
    margin: "6% auto",
    display: "flex",

    flexDirection: "column",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      maxWidth: "100%",
      minWidth: "100%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      margin: "10px 8px",
      width: "100%",
      maxWidth: "47%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      maxWidth: "400px",
      minWidth: "unset",
      maxHeight: 315,
    },
  },
  title: {
    textAlign: "center",
    fontSize: "20px",
    padding: "20px 0",
    fontWeight: "700",
  },
  title1: {
    color: "#0056D2",
  },
  title2: {
    color: "#000000",
  },
  title3: {
    color: "#DE4300",
  },
  title4: {
    color: "#017A9B",
  },

  p: {
    paddingLeft: "20px",
    margin: "3% 0",
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
    background: "#0056D2",
    "&:hover": {
      background: "#0056D2",
    },
  },
  btnf2: {
    background: "#000000",
    "&:hover": {
      background: "#000000",
    },
  },
  btnf3: {
    background: "#DE4300",
    "&:hover": {
      background: "#DE4300",
    },
  },
  btnf4: {
    background: "#017A9B",
    "&:hover": {
      background: "#017A9B",
    },
  },
  subtitle: {
    color: "var(--primary)",
    fontSize: "20px",
    fontWeight: 800,
    textAlign: "center",
  },
  btnmore: {
    background: "#4B4E54",

    margin: "63px auto 0",
    display: "block",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "&:hover": {
      background: "#4B4E54",
    },

    [theme.breakpoints.down("sm")]: {
      margin: "63px auto 10%",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "63px auto 56%",
    },
  },
  container1: {
    width: "85%",
    margin: "auto",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  search: {
    display: "flex",
    maxWidth: "100vw",
    alignItems: "center",
    justifyContent: "right",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  cardcontainer: {
    margin: "0 auto",
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

export default function Faq() {
  const classes = useStyles();
  useEffect(()=>{
    googleAnalyticsAction();
})
  return (
    <>
      <NavbarOther />
      <Container className={classes.container}>
        {/* <div className = {classes.search}>
                    <TextField
                        label="Search"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        />
                    </div> */}
        <Title className={classes.mtitle}>FAQs</Title>
        {/* <div className={classes.outer}>
          <div className={classes.content}>
            {[...Array(9)].map((faq) => {
              return (
                <div>
                  <Typography className={classes.question}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </Typography>
                  <Typography className={classes.answer}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur nec augue diam. Ut tempus elit nec ante
                    sollicitudin ullamcorper. Donec dolor felis, fringilla ac
                    bibendum nec, maximus nec nunc.
                  </Typography>
                </div>
              );
            })}
          </div>
          <div className={classes.right}>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title1}`}>COURSERA</h3>
              <div className={classes.p}>
                <p>What is Coursera?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf1}`}>Find out more</Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title2}`}>edX</h3>
              <div className={classes.p}>
                <p>What is edX?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf2}`}>Find out more</Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title3}`}>UDEMY</h3>
              <div className={classes.p}>
                <p>What is Udemy?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf3}`}>Find out more</Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title4}`}>UDACITY</h3>
              <div className={classes.p}>
                <p>What is Udacity?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf4}`}>Find out more</Button>
            </div>
            <Button className={`${classes.btnf} ${classes.btnmore}`}>View More</Button>

          </div>
        </div>
        */}
        <Grid container className={classes.container1}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Typography className={classes.question}>
              What is Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator is a search engine for online courses. We aggregate
              the best-reviewed online courses from various providers to make it
              easy to find the best courses on almost any subject, wherever they
              exist.
            </Typography>
            <Typography className={classes.question}>
              How does Coursenator help students?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator helps students take the first step in their career by
              providing them with the options to choose their learning path.
            </Typography>
            <Typography className={classes.question}>
              What mission does Coursenator have?
            </Typography>
            <Typography className={classes.answer}>
              Our mission is to make online education feasible for everyone.
            </Typography>
            <Typography className={classes.question}>
              Who is the Founder and co-founder at Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Our Founder is Pranav Bajaj pursuing his Bachelor's in Commerce
              from Motilal Nehru College in Delhi University, India, and our
              Co-founder is Pranay Mishra pursuing his Bachelor's in psychology
              from Amity University.
            </Typography>
            <Typography className={classes.question}>
              How do I give a review for a particular course on Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              There is an option to write a review on the course available on
              the product page only.
            </Typography>
            <Typography className={classes.question}>
              How do I save/bookmark courses on Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              There's an option on the product page and the course list page
              that lets you save/bookmark the courses you want.
            </Typography>
            <Typography className={classes.question}>
              What are tracks on the Coursenator website?
            </Typography>
            <Typography className={classes.answer}>
              To make your learning journey easy and to help you reach your
              destination, Coursenator brings you the "Tracks" feature.
            </Typography>
            <Typography className={classes.answer}>
              The "Tracks" feature helps our users to create their learning
              paths, customize them at any time and share their paths with other
              users. To help our users more, we have brought "Professional
              Tracks" made after intense research by our team and under the
              guidance of professionals working in different fields.
            </Typography>
            <Typography className={classes.answer}>
              <b>Note:</b> To get full access to our Tracks feature, make sure
              you have a user account on Coursenator.
            </Typography>
            <Typography className={classes.question}>
              How do coursenator blogs (Or Bloginator) help learners?
            </Typography>
            <Typography className={classes.answer}>
              Bloginator provides articles based on our analysis of these
              E-learning providers and helps you find top listings of courses on
              almost every subject you wish to study. Besides, this Bloginator
              covers blogs around top skills required in the industry, career
              opportunities, surveys, news, discount offers, and everything you
              want to discover in the E-learning industry. So make sure to
              subscribe to our newsletter, so you don't miss out on any major
              updates!
            </Typography>
            <Typography className={classes.question}>
              How can I contact Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              You can contact us at contactcoursenator@gmail.com or our
              Founder's and Co-Founder's Linkedin profile.
              <br />
              Pranav Bajaj (Founder) -
              https://www.linkedin.com/in/pranav-bajaj-coursenator/
              <br />
              Pranay Mishra (Co-Founder) -
              https://www.linkedin.com/in/pranay-mishra-7287021ab/
            </Typography>
            <Typography className={classes.question}>
              Where is Coursenator located (Head office)?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator's head office is located in Vasant Vihar, New Delhi,
              India - 110070. Although our Founder - Pranav Bajaj, and
              Co-founder, Pranay Mishra, prefer to work from their homes in
              Vasant Kunj and J.N.U respectively, especially in this Pandemic.
            </Typography>
            <Typography className={classes.question}>
              What is the team size at the Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Currently, in 2021 Our team size is 15 people.
            </Typography>
            <Typography className={classes.question}>
              What if I get a 404 page on Coursenator's website?
            </Typography>
            <Typography className={classes.answer}>
              Go to www.coursenator.com and try looking for the page again.
              You'll get a search option on our 404 pages to get you back in the
              right direction.
            </Typography>
            <Typography className={classes.question}>
              Does Coursenator have its own online courses?
            </Typography>
            <Typography className={classes.answer}>
              No, we promote courses from other platforms. We are partners with
              all the Top E-learning brands like Coursera, edX, Udemy, Udacity,
              and many more.
            </Typography>
            <Typography className={classes.question}>
              What's the benefit of signing up on Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              When you sign up to coursenator, you get access to our weekly
              blogs, news, and articles. You also get the option of enlisting
              the courses you are interested in, the courses you are enrolled
              in, and the courses you have finished. You can then view your
              progress, and then that information will help you decide your next
              course.
            </Typography>
            <Typography className={classes.question}>
              How many courses does Coursenator have?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator has, to date, 5000, which are updated regularly based
              on availability and start date.
            </Typography>

            <Typography className={classes.question}>
              How many courses does Coursenator have?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator has, to date, 5000, which are updated regularly based
              on availability and start date.
            </Typography>
            <Typography className={classes.question}>
              How to enroll for courses using Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator has, to date, 5000, which are updated regularly based
              on availability and start date.
            </Typography>
            <Typography className={classes.question}>
              How to enroll for courses using Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Go to our website, then search for the course that you want to
              learn.
              <br />
              Click on the course that you want to learn.
              <br />
              Click on “Go to Course” which can be seen on the right side of the
              screen.
              <br />
              Enroll and start learning!
            </Typography>
            <Typography className={classes.question}>
              How does Coursenator curate courses?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator curates best-reviewed online courses, which are
              handpicked by our team of E-learning experts. In addition to this,
              we take surveys from people in different professional fields
              before presenting them to our users. We curate them based on the
              rating of the course, the difficulty, the language of the course,
              how long the course is, and the start date of the online course.
            </Typography>
            <Typography className={classes.question}>
              How does Coursenator rank the courses on a subject?
            </Typography>
            <Typography className={classes.answer}>
              Unlike other platforms/E-learning providers where online courses
              might be ranked based on the number of enrollments, Courses on
              coursenator are ranked by E-learning experts by checking reviews
              and ratings of each course on every subject/topic that exists.
            </Typography>
            <Typography className={classes.question}>
              Why is Coursenator better than other online course search engines?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator is better than other online courses/MOOC search
              engines because, unlike others, we showcase only the Best-Reviewed
              online courses on our platform, which are handpicked by our Team
              of E-learning experts. In addition to this, we take surveys from
              people in different professional fields before presenting them to
              our users.
            </Typography>
            <Typography className={classes.question}>
              How can I guest blog at Coursenator?
            </Typography>
            <Typography className={classes.answer}>
              You can simply contact our team by writing us
              contactcoursenator@gmail.com. Our team will then review your
              previous work and write you back.
            </Typography>
            <Typography className={classes.question}>
              Are coursenator reviews genuine?
            </Typography>
            <Typography className={classes.answer}>
              Yes, all reviews given by users on Coursenator are checked and
              reviewed by our team consisting of E-learning experts. So they're
              100% Genuine.
            </Typography>
            <Typography className={classes.question}>
              How can Coursenator help my career?
            </Typography>
            <Typography className={classes.answer}>
              Coursenator helps students take the first and foremost step in
              their career: learning and gaining skills through self-paced and
              live classes online courses and applying them in real-world
              projects (promoting courses with more hands-on experience).
            </Typography>
            <Typography className={classes.question}>
              Are there Free courses/ Free certificate courses on coursenator?
            </Typography>
            <Typography className={classes.answer}>
              Yes, Coursenator does provide free courses on its platform. Simply
              click on "Discover Free Certificate Courses" on the homepage to
              find all the Free Certificate Courses.
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className={classes.cardcontainer}
          >
            <h5 className={classes.subtitle}>Providers FAQ</h5>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title1}`}>COURSERA</h3>
              <div className={classes.p}>
                <p>What is Coursera?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf1}`}>
                Find out more
              </Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title2}`}>edX</h3>
              <div className={classes.p}>
                <p>What is edX?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf2}`}>
                Find out more
              </Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title3}`}>UDEMY</h3>
              <div className={classes.p}>
                <p>What is Udemy?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf3}`}>
                Find out more
              </Button>
            </div>
            <div className={classes.ccard}>
              <h3 className={`${classes.title} ${classes.title4}`}>UDACITY</h3>
              <div className={classes.p}>
                <p>What is Udacity?</p>
                <p>How it works?</p>
              </div>
              <Button className={`${classes.btnf} ${classes.btnf4}`}>
                Find out more
              </Button>
            </div>
            <Link to="/faqprovider">
              <Button className={`${classes.btnf} ${classes.btnmore}`}>
                View More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  );
}
