import React, { useState } from "react"
import { Button } from "../../globalStyles"
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa"
import { SiMedium } from "react-icons/si"
import { FormControl, FormHelperText, Input } from "@material-ui/core"
import coursenator from ".../../../public/FooterLogo.svg"
import { Link } from "react-router-dom"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import axios from "axios"
import AlertNofitifation from "../notification/snackbars"
import Help from "../Help/Help"
import img from "../../assets/img/logo3.png"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: "#2D283E",
  },
  container: {
    margin: "0 5%",
    padding: "5% 0 ",
  },
  title: {
    margin: "0 0 5% 0",
  },
  footertitle: {
    color: "#fff",
    fontWeight: 800,
    fontSize: "20px",
    margin: "0 0 1.2vw 0",
    [theme.breakpoints.down("1281")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 10px",
    },
  },
  link: {
    textDecoration: "none",
    color: "#E5E5E5",
  },
  linkp: {
    margin: "1vw auto",
    position: "relative",
    lineHeight: "20px",
    fontFamily: "Sora",
    fontSize: "16px",
    [theme.breakpoints.down("1281")]: {
      fontSize: "14px",
    },
  },
  linkpp: {
    "&::after": {
      content: '"|"',
      position: "absolute",
      left: "108%",
      [theme.breakpoints.down("xs")]: {
        left: "110%",
      },
      [theme.breakpoints.down("md")]: {
        left: "110%",
      },
    },
  },
  linkpplast: {
    "&::after": {
      display: "none",
    },
  },
  fall: {
    background: " rgba(134, 93, 166, 0.12)",
    border: "1.01483px solid #FFFFFF",
    borderRadius: "10.1483px",
    maxWidth: "145px",
    textAlign: "center",
    padding: "9px",
    fontSize: "16px",
  },
  newsup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
  newsoutter: {
    minWidth: "459px",
    minHeight: "177px",
    background: "#fff",
    display: "flex",
    borderRadius: "27.485px",

    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("sm", "md")]: {
      minWidth: "31vw",
      padding: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "94vw",
    },
  },
  form1: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginTop: "21%",
  },
  form: {
    alignItems: "center",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    height: "70%",
  },
  formtitle: {
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#2D283E",
  },
  input: {
    border: "0.458084px solid #000000",
    maxWidth: "369px",
    width: "100%",
    borderRadius: "18.3234px",
    padding: "0 4%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "70vw",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "70vw",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "40vw",
    },
  },
  btn: {
    display: "flex",
    textTransform: "uppercase",
    background: "#fff !important",
    color: "#000 !important",
    borderRadius: "27.485px !important",
    margin: "5% 0",
    [theme.breakpoints.down("sm")]: {
      margin: "5% 0 10%",
    },
  },
  footerlink: {
    width: "93vw",
    marginTop: "-11%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-3%",
    },
  },
  uslink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "57vw",
    position: "relative",
    "&:before": {
      content: '" "',
      position: "absolute",
      width: "55vw",
      height: "1px",
      borderBottom: "1px solid #fff",
      top: "-2vw",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      width: "40vw",
      height: "1px",
      borderBottom: "1px solid #fff",
      top: "4vw",
      [theme.breakpoints.down("sm")]: {
        top: "8vw",
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      width: "65%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "98%",
      fontSize: "11px",
      flexDirection: "column",
    },
  },
  foosocialoutter: {
    maxWidth: "50vw",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100vw",
    },
  },
  foosocial: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: "25vw",
    margin: "8% auto 0 ",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100vw",
    },
  },

  socialicon: {
    color: "#fff",
    fontSize: "25px",
  },
  coursenator: {
    width: 200,
    marginTop: "-3%",
    marginBottom: "-2%",
  },
  searchby: {
    "&:hover": {
      transform: "scale(1.16)",
    },
    transition: "transform .3s",
  },
}))

function Newfooter() {
  const classes = useStyles()
  const [newsletterEmail, setnewsletterEmail] = useState("")
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [notificationType, setNotificationType] = useState("default")

  const setReturnData = (data) => {
    setNotificationOpen(data.isOpen)
    setNotificationMessage(data.message)
    setNotificationType(data.type)
  }
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
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.title}>
            <img src={img} alt='Coursenator' className={classes.coursenator} />
          </div>

          <Grid container>
            <Grid item md={2} sm={6} xs={12}>
              <h5 className={classes.footertitle}>Popular Subjects</h5>
              <Link className={classes.link} to='/course/data-science'>
                <p className={classes.linkp}>Data Science</p>
              </Link>
              <Link className={classes.link} to='/course/computer-science'>
                <p className={classes.linkp}>Computer Science</p>
              </Link>
              <Link className={classes.link} to='/course/business'>
                <p className={classes.linkp}>Business</p>
              </Link>
              <Link className={classes.link} to='/course/basic-sciences'>
                <p className={classes.linkp}>Basic Sciences</p>
              </Link>
              <Link className={classes.link} to='/course/health'>
                <p className={classes.linkp}>Health</p>
              </Link>
              <Link className={classes.link} to='/course/personal-development'>
                <p className={classes.linkp}>Personal Development</p>
              </Link>
              <Link className={classes.link} to='/course/social-sciences'>
                <p className={classes.linkp}>Social Sciences</p>
              </Link>
              <Link className={classes.link} to='/course/programming'>
                <p className={classes.linkp}>Programming</p>
              </Link>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <h5 className={classes.footertitle}> Trending Topics (2021)</h5>
              <Link
                className={classes.link}
                to='/blogpost/5ZTkd7qJT5JAMy9czrxOzL'
              >
                <p className={classes.linkp}>
                  Top 10 Business courses to start your career in 2021
                </p>
              </Link>
              <Link
                className={classes.link}
                to='/blogpost/7E7TXvkI8J8wcY1L1TiQKU'
              >
                <p className={classes.linkp}>
                  How to get a free course on Coursera (Guide from Coursenator)
                </p>
              </Link>
              <Link
                className={classes.link}
                to='/blogpost/13gEOXYDbTXN26GcUtQmCR'
              >
                <p className={classes.linkp}>
                  How to get Data Scientist jobs in 2021
                </p>
              </Link>
            </Grid>
            <Grid item md={2} sm={6} xs={12} className={classes.section3}>
              <h5 className={classes.footertitle}> Provider </h5>
              <a
                className={classes.link}
                href='/provider-list/coursera'
                target='_blank'
              >
                <p className={classes.linkp}>Coursera</p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/edx'
                target='_blank'
              >
                <p className={classes.linkp}>edX</p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/futurelearn'
                target='_blank'
              >
                <p className={classes.linkp}> FutureLearn </p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/udacity'
                target='_blank'
              >
                <p className={classes.linkp}>Udacity </p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/edureka'
                target='_blank'
              >
                <p className={classes.linkp}>Edureka </p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/udemy'
                target='_blank'
                rel='noreferrer'
              >
                <p className={classes.linkp}>Udemy </p>
              </a>
              <a
                className={classes.link}
                href='/provider-list/pluralsight'
                target='_blank'
                rel='noreferrer'
              >
                <p className={classes.linkp}>Pluralsight </p>
              </a>
            </Grid>
            <Grid item md={4} sm={6} xs={12} className={classes.newsup}>
              <h5 className={classes.footertitle}> Search Courses by :</h5>
              <Grid container>
                <Grid item md={6} xs={12} sm={6}>
                  <Link to='/catalog' className={classes.link}>
                    <p
                      className={`${classes.linkp} ${classes.fall} ${classes.searchby}`}
                    >
                      All Subject
                    </p>
                  </Link>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <Link to='/provider' className={classes.link}>
                    <p
                      className={`${classes.linkp} ${classes.fall} ${classes.searchby}`}
                    >
                      All Provider
                    </p>
                  </Link>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <Link to='/university' className={classes.link}>
                    <p
                      className={`${classes.linkp} ${classes.fall} ${classes.searchby}`}
                    >
                      All Universities
                    </p>
                  </Link>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <Link to='/language' className={classes.link}>
                    <p
                      className={`${classes.linkp} ${classes.fall} ${classes.searchby}`}
                    >
                      All Languages
                    </p>
                  </Link>
                </Grid>
              </Grid>
              <div className={classes.form1}>
                <div className={classes.newsoutter}>
                  <div className={classes.form}>
                    <h5 className={classes.formtitle}>
                      Sign Up for Coursenator Newsletter
                    </h5>
                    <FormControl className={classes.input}>
                      <Input
                        id='my-input'
                        type='email'
                        onChange={(e) => setnewsletterEmail(e.target.value)}
                        placeholder='Enter email'
                        aria-describedby='my-helper-text'
                      />
                    </FormControl>
                  </div>
                </div>
                <Button className={classes.btn} onClick={() => onSignupBtn()}>
                  Subscribe <FaTelegram className='fatel' />
                </Button>
              </div>
            </Grid>
          </Grid>
          <div className={classes.footerlink}>
            <div className={classes.uslink}>
              <Link className={classes.link} to='/about'>
                <p className={`${classes.linkp} ${classes.linkpp}`}>ABOUT US</p>
              </Link>
              <Link className={classes.link} to='/blogs'>
                <p className={`${classes.linkp} ${classes.linkpp}`}> BLOGS</p>
              </Link>
              <Link className={classes.link} to='/faq'>
                <p className={`${classes.linkp} ${classes.linkpp}`}>FAQs </p>
              </Link>
              <Link className={classes.link} to='/newsandarticles'>
                <p className={`${classes.linkp} ${classes.linkpp}`}>
                  NEWS & ARTICLES
                </p>
              </Link>
              <Link className={classes.link} to='/contactus'>
                <p className={`${classes.linkp} ${classes.linkpp}`}>REACH US</p>
              </Link>
              <Link className={classes.link} to='/termsandconditions'>
                <p
                  className={`${classes.linkp} ${classes.linkpp} ${classes.linkpplast}`}
                >
                  TERMS & CONDITIONS
                </p>
              </Link>
            </div>

            <div className={classes.foosocialoutter}>
              <div className={classes.foosocial}>
                <a
                  href='https://www.linkedin.com/company/coursenator/'
                  target='_blank'
                  aria-label='LinkedIn'
                  className={classes.social}
                >
                  <FaLinkedin className={classes.socialicon} />
                </a>
                <a
                  href='https://www.facebook.com/Coursenator'
                  target='_blank'
                  aria-label='Facebook'
                  className={classes.social}
                >
                  <FaFacebook className={classes.socialicon} />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCpcUP0NzPTZKaEnKXl1mVpg'
                  target='_blank'
                  aria-label='Youtube'
                  className={classes.social}
                >
                  <FaTwitter className={classes.socialicon} />
                </a>
                <a
                  href='https://www.instagram.com/coursenator_/'
                  target='_blank'
                  aria-label='Instagram'
                  className={classes.social}
                >
                  <FaInstagram className={classes.socialicon} />
                </a>
                <a
                  href='https://t.me/ElearnersFreeCourses'
                  target='_blank'
                  aria-label='Telegram'
                  className={classes.social}
                >
                  <FaTelegram className={classes.socialicon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Help />
    </>
  )
}

export default Newfooter
