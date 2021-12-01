import { Btn, NavbarOther, Loading } from "./../components";
import { Container, Title } from "./../globalStyles";

import { SearchBar } from "./../components/HeroSection/HeroSecElements";
import { makeStyles, Typography } from "@material-ui/core";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ContentfulClient,
  googleAnalyticsAction,
  onGetData,
} from "./apicalling";
import axios from "axios";
import AlertNofitifation from "../components/notification/snackbars";
import marked from "marked";
import { Helmet } from "react-helmet";
import { Newfooter, Offerads } from "../components";
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-213476590-1'); 
//   ReactGA.set({ page:window.location.pathname })
//   ReactGA.pageview(window.location.pathname+window.location.search);
const useStyles = makeStyles((theme) => ({
  top: {
    marginLeft: "10%",
    marginRight: "10%",
    maxWidth: "100vw",
    display: "flex",
    height: 100,
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      marginLeft: "2%",
      marginRight: "2%",
    },
  },
  title: {
    color: "var(--primary)",
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
      margin: 5,
    },
  },
  vr: {
    borderLeft: "1px solid",
    opacity: 0.5,
    height: 32.5,
    marginRight: 15,
    marginLeft: 15,
    [theme.breakpoints.down("sm")]: {
      height: 20,
      marginRight: 7,
      marginLeft: 4,
    },
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#2D283E",
    zIndex: 1,
    maxWidth: "100vw",
    marginRight: "5%",
    marginLeft: "5%",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0%",
      paddingRight: "0%",
      marginRight: "0%",
      marginLeft: "0%",
    },
  },
  searchbar: {
    maxWidth: "500px !important",
    width: "100%",
    height: "42px !important",
    borderRadius: "50px ",
    border: "0.293661px solid #802BB1 !important",
    boxShadow: "1.4683px 1.4683px 8.80983px rgba(0, 0, 0, 0.25)",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "5px",
      marginBottom: "5px",
    },
  },
  searcharea: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  subtext: {
    padding: 10,
  },
  hr: {
    width: "121%",
    border: "1px solid",
    opacity: 0.2,
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      marginTop: "20px",
    },
  },
  img: {
    width: "100%",
    height: "auto",
    margin: 20,
  },
  blogpost: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  link: {
    textDecoration: "none",
  },
  search: {
    display: "flex",
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  btitle: {
    textAlign: "center",
    margin: "20px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
  },
  p: {
    textAlign: "left",

    margin: "10px 0 30px",
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("768")]: {
      display: "none",
    },
  },
  btn: {
    padding: "6px 25px",
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("768")]: {
      display: "flex",
    },
  },
  blogtitle: {
    textAlign: "center",
    fontWeight: "600",
  },
  upper: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
export default function Blogs(props) {
  const classes = useStyles();
  const [AllBlogData, setAllBlogData] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [newsletterEmail, setnewsletterEmail] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("default");
  const [products, setProducts] = useState(null);
  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen);
    setNotificationMessage(data.message);
    setNotificationType(data.type);
  };
  // const pq = async () => {
  //   await onGetData("api/user/blog/getAllData")
  //     .then((res) => {
  //       if (res.data.error == false) {
  //         setAllBlogData(res.data.data);
  //         setLoadingData(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //   const query = gql`
  //   {
  //     blogPosts{
  //       id
  //       title
  //       content{raw}

  //     }
  //   }
  // `
  useEffect(() => {
    googleAnalyticsAction();
    ContentfulClient.getEntries()
      .then((response) => {
        var data = [];
        response.items.forEach((element) => {
          if (element.sys.contentType.sys.id == "blog") {
            data.push(element);
          }
        });
        console.log(data);
        setAllBlogData(data);
        setLoadingData(false);
      })
      .catch((error) => {
        console.log(error);
      });

    // pq();
  }, []);
  const onSignupBtn = () => {
    if (newsletterEmail !== "") {
      var data = {
        attributes: {
          newKey: "New Value",
        },
        updateEnabled: false,
        email: newsletterEmail,
      };
      axios
        .post("https://api.sendinblue.com/v3/contacts", data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key":
              "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",
          },
        })
        .then((res1) => {
          setNotificationOpen(true);
          setNotificationMessage("Thenk you for subscribe");
          setNotificationType("success");
        })
        .catch(function (error1) {
          if (
            error1.response.status == 400 &&
            error1.response.data.code == "duplicate_parameter"
          ) {
            setNotificationOpen(true);
            setNotificationMessage("All Ready Exist");
            setNotificationType("error");
          }
        });
    } else {
      setNotificationOpen(true);
      setNotificationMessage("fill all field");
      setNotificationType("error");
    }
  };
  return (
    <>
      {notificationOpen === true ? (
        <AlertNofitifation
          isOpen={notificationOpen}
          message={notificationMessage}
          setData={setReturnData}
          type={notificationType}
        />
      ) : (
        ""
      )}
      <Container>
        <Helmet>
          <title>Bloginator | E-learning Blogs</title>
          <meta
            name="description"
            content="Bloginator covers top skills required in the industry, career opportunities, surveys, provider news, course discount offers, Top courses lists, etc."
          />
        </Helmet>
        {/* <div className = {classes.top} >
            <Link to = "/" className = {classes.link}>
            <Typography className = {classes.title} variant="h1" noWrap>
            COURSENATOR
          </Typography>
          </Link>
          <div className = {classes.vr} />
          <Typography className = {classes.title} variant="h1" noWrap>
            BLOG
          </Typography>
          <div className = {clsx(classes.search, classes.sectionDesktop)}>
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
          </div>
            </div>
            <div className = {clsx(classes.search, classes.sectionMobile)}>
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
        <NavbarOther />

        <div className={classes.upper}>
          <h2>Coursenator Newsletter (Bloginator)</h2>
          <Typography className={classes.subtext}>
            Subsribe to our Coursenator NewsLetter for the latest updates on
            Online Education news and articles
          </Typography>
          <div className={classes.searcharea}>
            <SearchBar
              onChange={(e) => setnewsletterEmail(e.target.value)}
              className={classes.searchbar}
              placeholder="Enter your email and get our newsletter"
            />
            <Btn onClick={() => onSignupBtn()} className={classes.btn}>
              Sign up for free
            </Btn>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.hr} />
          <Typography variant="h5" className={classes.btitle}>
            WHAT IS BLOGINATOR ?
          </Typography>
          <p className={classes.p}>
            Bloginator provides articles based on our analysis of these
            E-learning providers and helps you find top listings of courses on
            almost every subject you wish to study. Besides, this Bloginator
            covers blogs around top skills required in the industry, career
            opportunities, surveys, news, discount offers, and everything you
            want to discover in the E-learning industry. So make sure to
            subscribe to our newsletter, so you don't miss out on any major
            updates!
          </p>
          {loadingData == true ? (
            <Loading name="Blog" />
          ) : (
            <>
              {AllBlogData?.map((x, y) => {
                return (
                  <>
                    <div className={classes.blogpost}>
                      <Typography variant="h5" className={classes.blogtitle}>
                        {x.fields.name}
                      </Typography>
                      <Typography className={classes.date}>
                        {/* {moment(x.createdAt).format("DD/MM/YYYY")} */}
                      </Typography>
                      <img
                        src={
                          x.fields.blogImage.fields
                            ? x.fields.blogImage.fields.file.url
                            : ""
                        }
                        className={classes.img}
                        alt="Blog"
                      />
                      <Typography
                        style={{
                          width: "80%",
                          textAlign: "left",
                          margin: "10px",
                        }}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              marked(
                                x.fields.shortDescription
                                  ? x.fields.shortDescription
                                  : ""
                              )
                                .split(" ")
                                .slice(0, 40)
                                .join(" ") + "...",
                          }}
                        ></div>
                        {/* <Link to={`/blogpost/${x.slug}`}>Read more</Link> */}
                      </Typography>
                      <Link to={`/blogpost/${x.sys.id}`}>
                        <Btn>Read more</Btn>
                      </Link>
                    </div>
                    <div className={classes.hr} />
                  </>
                );
              })}
              <Link style={{ margin: "25px 0", textDecoration: "underline" }}>
                Load more Blogs
              </Link>
            </>
          )}
        </div>
      </Container>
      <Newfooter />
      <Offerads />
    </>
  );
}
