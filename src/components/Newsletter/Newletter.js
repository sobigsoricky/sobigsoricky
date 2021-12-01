import { Title, Button } from "./../../globalStyles"
import { makeStyles, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import img from ".../../../public/Group 7.svg"
import img1 from "../../../src/assets/img/subsubject.jpg"
import { ContentfulClient, onGetData } from "../../views/apicalling"
import Btn from "../Button/Btn"
import axios from "axios"
import { Link } from "react-router-dom"
import AlertNofitifation from "../notification/snackbars"
import moment from "moment"
export const EmailButton = styled(Button)`
  background: var(--white);
  color: #4b4e54;

  ${Button}
`

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    maxHeight: "fit-content",
    display: "flex",
    alignItems: "center",
    margin: "0 0 9%",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "0 0 ",
    },
  },
  newbtn: {
    background: "#fff",
    color: "#000",
    borderRadius: "0",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      background: "none",
      border: "1px solid #fff",
      color: "#fff",
    },
  },
  section: {
    display: "flex",
    maxWidth: "640px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      margin: 20,
      maxWidth: "100vw",
    },
  },

  column: {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    margin: 10,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    background: "var(--grey)",
    boxShadow: "0px 0px 30px rgba(125, 125, 125, 0.5)",
    borderRadius: "49.4986px 2.23542px",
    textDecoration: "none",
    height: 434,
    width: 470,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "78vw",
    },
  },
  title: {
    color: "var(--white)",
    fontWeight: 300,
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    margin: 10,
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 26,
    },
  },

  text: {
    color: "var(--white)",
    textAlign: "left",
    margin: 20,
    marginTop: 10,
  },
  search: {
    width: 340,
    height: 45,
    padding: "8px 30px",
    borderRadius: 15,
    outline: "none",
    fontSize: 14,
    color: "var(--grey)",
    margin: 20,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      fonSize: 12,
      width: "90%",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  desktop: {
    display: "flex",
    maxWidth: "434px",
    fontSize: "32px !important",
    textAlign: "left !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  boxoutter: {
    position: "relative",
    width: "560px",
    minHeight: "640px",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      height: "50%",
    },
  },
  box1: {
    width: "453.73px",
    height: "556.56px",
    "&:hover": {
      transform: "scale(1.05)",
    },
    transition: "transform .4s",
    position: "absolute",
    background: "rgba(164, 131, 190, 0.5)",
    top: "12%",
    right: "0",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "25px",
    [theme.breakpoints.down("sm")]: {
      width: "56%",
      height: "50%",
    },
  },
  box2: {
    position: "absolute",
    "&:hover": {
      transform: "scale(1.05)",
    },
    transition: "transform .4s",
    height: "312px",
    width: "297px",
    border: "2.5px solid #000000",
    top: "32%",
    background: "#ffff",
    [theme.breakpoints.down("sm")]: {
      width: "52%",
      height: "34%",
      top: "20%",
    },
  },
  box3: {
    position: "absolute",
    "&:hover": {
      transform: "scale(1.05)",
    },
    transition: "transform .4s",
    height: "365px",
    width: "308px",
    border: "2.5px solid #802BB1",
    top: "45%",
    left: "41%",
    background: "#ffff",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "39%",
      top: "30%",
    },
  },
  box4: {
    position: "absolute",
    "&:hover": {
      transform: "scale(1.05)",
    },
    transition: "transform .4s",
    height: "260px",
    width: "215px",
    border: "2.5px solid #4B4E54",
    top: "70%",
    left: "11%",
    background: "#ffff",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "35%",
      top: "42%",
    },
  },
  img: {
    width: "100%",
    maxHeight: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "93%",
    },
  },
  blog: {
    width: "100%",
    height: "100%",
  },
  discoutter: {
    padding: "10px",
    height: "90px",
  },
  date: {
    textAlign: "right",
  },
  dis: {
    textAlign: "center",
    color: "#2D283E",
    fontWeight: 600,
    fontFamily: "Nunito",
    fontSize: "12px",
  },
  other: {
    textAlign: "center",
    fontSize: "10px",
  },
  imgoutter: {
    height: "71%",
  },
  imgoutter1: {
    height: "75.2%",
  },
  imgoutter2: {
    height: "65%",
  },
  topcourse: {
    maxWidth: "100vw",
    marginLeft: "5%",
    marginRight: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: "15px",
    marginTop: "-3%",
    marginBottom: "3% ",
  },
}))

export default function Newletter() {
  const classes = useStyles()
  const [AllBlogData, setAllBlogData] = useState([])
  const [newsletterEmail, setnewsletterEmail] = useState("")
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("default")

  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen)
    setNotificationMessage(data.message)
    setNotificationType(data.type)
  }
  const pq = async () => {
    await onGetData("api/user/blog/getAllData")
      .then((res) => {
        if (res.data.error == false) {
          console.log(res.data.data)
          setAllBlogData(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    // ContentfulClient.getEntries()
    //   .then((response) => {
    //     var data = [];
    //     var count = 1;
    //     response.items.forEach((element) => {
    //       if (element.sys.contentType.sys.id == "blog" && count <= 3) {
    //         data.push(element);
    //         count++;
    //       }
    //     });
    //     console.log(data);
    //     setAllBlogData(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    pq()
  }, [])

  const onSignupBtn = () => {
    if (newsletterEmail !== "") {
      var data = {
        attributes: {
          newKey: "New Value",
        },
        updateEnabled: false,
        email: newsletterEmail,
      }
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
          setNotificationOpen(true)
          setNotificationMessage("Thenk you for subscribe")
          setNotificationType("success")
        })
        .catch(function (error1) {
          if (
            error1.response.status == 400 &&
            error1.response.data.code == "duplicate_parameter"
          ) {
            setNotificationOpen(true)
            setNotificationMessage("All Ready Exist")
            setNotificationType("error")
          }
        })
    } else {
      setNotificationOpen(true)
      setNotificationMessage("fill all field")
      setNotificationType("error")
    }
  }

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

      <div className={classes.root}>
        <div className={classes.section}>
          <Title className={classes.desktop}>
            Get all latest news and articles
          </Title>
          <div className={classes.box}>
            <Typography variant='h1' className={classes.title}>
              Coursenator Newsletter
            </Typography>
            <Typography className={classes.text}>
              Want news about free online courses? Remain updated with the
              E-learning Industry? Subscribe to our free Bloginator Newsletter &
              get news about MOOCs directly in your inbox.
            </Typography>
            <form className={classes.form}>
              <input
                onChange={(e) => setnewsletterEmail(e.target.value)}
                placeholder='Enter your email and get our newsletter'
                className={classes.search}
              />
              <Btn className={classes.newbtn} onClick={() => onSignupBtn()}>
                Sign up for free
              </Btn>
            </form>
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.boxoutter}>
            <div className={classes.box1}></div>
            <div className={classes.box2}>
              {AllBlogData.length > 0 ? (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>
                      {moment(AllBlogData[0].createdAt).format("DD/MM/YYYY")}
                    </p>
                    <p className={classes.dis}>{AllBlogData[0].blog_name}</p>
                    <p className={classes.other}>
                      By <b>{AllBlogData[0].author_name}</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter}>
                    <Link to={`/blogpost/13gEOXYDbTXN26GcUtQmCR`}>
                      <img
                        src={
                          AllBlogData.length > 0
                            ? AllBlogData[0].blog_image_path
                              ? AllBlogData[0].blog_image_path
                              : img1
                            : img1
                        }
                        className={classes.img}
                        alt='images'
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>Date</p>
                    <p className={classes.dis}>Lorem ipsum dolor sit amet</p>
                    <p className={classes.other}>
                      By <b>Pranav</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter}>
                    <Link>
                      <img src={img1} className={classes.img} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className={classes.box3}>
              {AllBlogData.length > 1 ? (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>
                      {moment(AllBlogData[1].createdAt).format("DD/MM/YYYY")}
                    </p>
                    <p className={classes.dis}>{AllBlogData[1].blog_name}</p>
                    <p className={classes.other}>
                      By <b>{AllBlogData[1].author_name}</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter1}>
                    <Link to={`/blogpost/7E7TXvkI8J8wcY1L1TiQKU`}>
                      <img
                        src={
                          AllBlogData.length > 0
                            ? AllBlogData[1].blog_image_path
                              ? AllBlogData[1].blog_image_path
                              : img1
                            : img1
                        }
                        className={classes.img}
                        alt='images'
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>Date</p>
                    <p className={classes.dis}>Lorem ipsum dolor sit amet</p>
                    <p className={classes.other}>
                      By <b>Pranav</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter1}>
                    <Link>
                      <img tosrc={img1} className={classes.img} alt='img' />
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className={classes.box4}>
              {AllBlogData.length > 2 ? (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>
                      {moment(AllBlogData[2].createdAt).format("DD/MM/YYYY")}
                    </p>
                    <p className={classes.dis}>{AllBlogData[2].blog_name}</p>
                    <p className={classes.other}>
                      By <b>{AllBlogData[2].author_name}</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter2}>
                    <Link to={`/blogpost/5ZTkd7qJT5JAMy9czrxOzL`}>
                      <img
                        src={
                          AllBlogData.length > 0
                            ? AllBlogData[2].blog_image_path
                              ? AllBlogData[2].blog_image_path
                              : img1
                            : img1
                        }
                        className={classes.img}
                        alt='images'
                      />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={classes.blog}>
                  <div className={classes.discoutter}>
                    <p className={classes.date}>Date</p>
                    <p className={classes.dis}>Lorem ipsum dolor sit amet</p>
                    <p className={classes.other}>
                      By <b>Pranav</b>
                    </p>
                  </div>
                  <div className={classes.imgoutter2}>
                    <Link>
                      <img src={img1} className={classes.img} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Link to='/blogs/' className={classes.topcourse}>
        <Button big>Browse all Articles!</Button>
      </Link>
    </>
  )
}
