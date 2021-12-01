import { makeStyles, withStyles, Typography } from "@material-ui/core";
import {
  CheckBoxArea,
  Insert1,
  Label,
  Button,
  P,
  SignupBox,
  SignupContainer,
  Bp,
  SignupTitle,
  Social,
  Li,
  SignupOutter,
  SignupLeft,
  SignupRight,
  Heading,
  Par,
  Subheading,
} from "./SignupElements";
import React, { useState } from "react";
import StyledCheckbox from "./StyledCheckbox";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import Btn from "../Button/Btn";
import img from "./../../assets/img/hero-bg.png";
import { GiSandsOfTime } from "react-icons/gi";
import {
  FaRegEye,
  FaBookmark,
  FaRegBookmark,
  FaCheckCircle,
} from "react-icons/fa";
import ReadOnly from "../StarRating/ReadOnly";
import Dialog from "@material-ui/core/Dialog";

import DialogTitle from "@material-ui/core/DialogTitle";
import {
  cryptoDecrypt,
  cryptoEncrypt,
  onPutData,
  onPostData,
} from "../../views/apicalling";
import Cookies from "universal-cookie";
import { BookMark } from "../../components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GoogleLogin } from "react-google-login";

const cookies = new Cookies();

const useStyles = (theme) => ({
  griditem: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    fontSize: "32px !important",
    fontWeight: "600 !important",
    padding: " 41% 32px 0 44px !important",
  },
  left: {
    width: "100%",
    color: "#ffff",
  },
  sub: {
    padding: "0 20px",
  },
  check: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "104%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  signinlink: {
    fontSize: "16px",
  },
  pa: {
    fontSize: "14px",
  },
  loginmodal: {
    borderRadius: "20px",
  },
  mobile_share: {
    display: "none ",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
});
class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: true,
      signInModel: false,
      btnLoading: false,
      username: "",
      password: "",
      email: "",
      isOpen: false,
      message: "",
      type: "info",
    };
    this.handleClose = this.handleClose.bind();
    this.handelSignInModel = this.handelSignInModel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleClose = () => {
    this.setState({
      isOpen1: false,
    });
    this.props.getData(false);
  };
  handelSignInModel = () => {
    this.setState({
      isOpen1: false,
      signInModel: true,
    });
  };
  handleSubmit = (e) => {
    this.setState({
      btnLoading: true,
    });
    if (
      this.state.username.trim() !== "" &&
      this.state.password.trim() !== ""
    ) {
      onPostData("api/user/login", {
        email: this.state.username,
        password: this.state.password,
      })
        .then((response) => {
          if (response.data.error === false) {
            cookies.set("token", response.data.token);
            cookies.set("__sdk", response.data.a);
            this.setState({
              btnLoading: false,
              isOpen: true,
              message: response.data.message,
              type: "success",
              islogin: true,
              isOpen1: false,
            });
            this.props.getData(false);
            window.location.reload();
          } else {
            this.setState({
              btnLoading: false,
              isOpen: true,
              message: response.data.message,
              type: "error",
            });
          }
        })
        .catch((error) => {
          this.setState({
            btnLoading: false,
            isOpen: true,
            message: "error",
            type: "error",
          });
        });
    } else {
      this.setState({
        btnLoading: false,
        isOpen: true,
        message: "Fill required fields",
        type: "error",
      });
    }
  };
  setReturnData = (data) => {
    this.setState(data);
  };
  setReturn1Data = (data) => {
    this.setState({
      isOpen1: true,
      signInModel: data,
    });
  };
  responseGoogle = (response) => {
    onPostData("api/user/glogin", {
      email: response.profileObj.email,
      gid: response.profileObj.googleId,
    })
      .then((response) => {
        if (response.data.error === false) {
          cookies.set("token", response.data.token);
          cookies.set("__sdk", response.data.a);
          this.setState({
            btnLoading: false,
            isOpen: true,
            message: response.data.message,
            type: "success",
            islogin: true,
            isOpen1: false,
          });
          this.props.getData(false);
          window.location.reload();
        } else {
          this.setState({
            btnLoading: false,
            isOpen: true,
            message: response.data.message,
            type: "error",
          });
        }
      })
      .catch((error) => {
        this.setState({
          btnLoading: false,
          isOpen: true,
          message: "error",
          type: "error",
        });
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        {this.state.signInModel == true ? (
          <Signup getData={this.setReturn1Data.bind(this)} />
        ) : null}
        <Dialog
          open={this.state.isOpen1}
          onClose={() => this.handleClose()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.loginmodal}
          maxWidth="md"
        >
          <SignupOutter>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid
                item
                md={5}
                sm={6}
                xs={12}
                style={{ height: "100%" }}
                className={classes.griditem}
              >
                <SignupLeft className={classes.left}>
                  <Heading className={classes.title}>
                    LEARN MORE. ACHIEVE MORE.
                  </Heading>
                  {/* <Par>Sign up to Coursenator for free and get access to our Tracks feature.</Par> */}
                  <Subheading className={classes.sub}>
                    Login in with your social media account
                  </Subheading>
                  <Social>
                    <Li>{/* <FaFacebook className="loginicon" /> */}</Li>
                    <Li>
                      <GoogleLogin
                        clientId="861504115516-iifr2rthspg5oisgr14p76i0uq1up9cc.apps.googleusercontent.com"
                        buttonText="Login"
                        render={(renderProps) => (
                          <FaGoogle
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="loginicon"
                          />
                        )}
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={"single_host_origin"}
                      />
                    </Li>
                    <Li>{/* <FaLinkedin className="loginicon" /> */}</Li>
                  </Social>
                </SignupLeft>
              </Grid>
              <Grid item md={7} sm={6} xs={12} style={{ height: "100%" }}>
                <SignupRight>
                  <SignupBox className={classes.signinbox}>
                    <SignupTitle>Welcome Back! </SignupTitle>
                    <Insert1
                      placeholder="Username/ E-mail"
                      type="email"
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                    <Insert1
                      placeholder="Password"
                      type="password"
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <div className={classes.check}>
                      <CheckBoxArea>
                        <StyledCheckbox />
                        <Label>Keep me logged in</Label>
                      </CheckBoxArea>
                      <Link
                        to="/profile"
                        className={`signinlink ${classes.signinlink}`}
                      >
                        Forgot Password ?
                      </Link>
                    </div>
                    {this.state.btnLoading ? (
                      <center>
                        <CircularProgress />
                      </center>
                    ) : (
                      <>
                        <Button onClick={() => this.handleSubmit()}>
                          <P> Log in</P>
                        </Button>
                        <div className={classes.mobile_share}>
                          <Li>{/* <FaFacebook className="loginicon" /> */}</Li>
                          <Li>
                            <GoogleLogin
                              clientId="861504115516-iifr2rthspg5oisgr14p76i0uq1up9cc.apps.googleusercontent.com"
                              buttonText="Login"
                              render={(renderProps) => (
                                <FaGoogle
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                  className="loginicon"
                                />
                              )}
                              onSuccess={this.responseGoogle}
                              onFailure={this.responseGoogle}
                              cookiePolicy={"single_host_origin"}
                            />
                          </Li>
                          <Li>{/* <FaLinkedin className="loginicon" /> */}</Li>
                        </div>
                      </>
                    )}
                    <Bp>Don’t have an account yet?</Bp>
                    <p className={classes.pa}>
                      Sign up to Coursenator for free and get more out of it.
                    </p>
                    <Link
                      onClick={() => this.handelSignInModel()}
                      className="signinlink"
                    >
                      Sign Up
                    </Link>
                  </SignupBox>
                </SignupRight>
              </Grid>
            </Grid>
          </SignupOutter>
        </Dialog>
      </>
    );
  }
}
export default withStyles(useStyles)(LoginModal);
