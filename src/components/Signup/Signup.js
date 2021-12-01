import React, { Component } from "react";
import {
  CheckBoxArea,
  Button,
  Insert,
  Label,
  SignupBox,
  SignupContainer,
  SignupTitle,
  SignupRight,
  P,
  Bp,
  SignupOutter,
  SignupLeft,
  Heading,
  Par,
  Subheading,
  Social,
  Li,
} from "./SignupElements";
import StyledCheckbox from "./StyledCheckbox";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { cryptoDecrypt, onPostData } from "../../views/apicalling";
import CircularProgress from "@material-ui/core/CircularProgress";
import AlertNofitifation from "../notification/snackbars";
import LoginModel from "./loginmodal";
import Cookies from "universal-cookie";
import { GoogleLogin } from "react-google-login";
var generator = require("generate-password");

var password1234 = generator.generate({
  length: 10,
  numbers: true,
});

const cookies = new Cookies();
const useStyle = (theme) => ({
  griditem: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobile_share: {
    display: "none ",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: true,
      btnLoading: false,
      signUpModel: false,
      username: "",
      password: "",
      cpasword: "",
      email: "",
      name: "",
      isOpen: false,
      message: "",
      type: "info",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelSignUpModel = this.handelSignUpModel.bind(this);
    this.setReturnData = this.setReturnData.bind(this);
    this.handleClose = this.handleClose.bind();
  }
  handleClose = () => {
    this.setState({
      isOpen1: false,
    });
    this.props.getData(false);
  };
  handelSignUpModel = () => {
    this.setState({
      isOpen1: false,
      signUpModel: true,
    });
  };
  handleSubmit = (e) => {
    this.setState({
      btnLoading: true,
    });
    if (
      this.state.username.trim() !== "" &&
      this.state.username.length >= 6 &&
      this.state.password.trim() !== ""
    ) {
      onPostData("api/user/registration", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        username: this.state.username,
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
              username: "",
              password: "",
              cpasword: "",
              email: "",
              name: "",
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
      signUpModel: data,
    });
  };
  responseGoogle = (response) => {
    onPostData("api/user/gregistration", {
      email: response.profileObj.email,
      password: password1234,
      name: response.profileObj.name,
      username: response.profileObj.googleId,
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
            username: "",
            password: "",
            cpasword: "",
            email: "",
            name: "",
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
        {this.state.signUpModel == true ? (
          <LoginModel getData={this.setReturn1Data.bind(this)} />
        ) : null}
        {this.state.isOpen === true ? (
          <AlertNofitifation
            isOpen={this.state.isOpen}
            message={this.state.message}
            setData={this.setReturnData.bind(this)}
            type={this.state.type}
          />
        ) : (
          ""
        )}
        <Dialog
          open={this.state.isOpen1}
          onClose={() => this.handleClose()}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className={classes.loginmodal}
          maxWidth="md"
        >
          <SignupContainer>
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
                  style={{
                    height: "100%",
                  }}
                  className={classes.griditem}
                >
                  <SignupLeft>
                    <Heading>
                      We aim to make online education feasible for everyone.
                    </Heading>
                    <Par>
                      Sign up to Coursenator for free and get access to our
                      Tracks feature.
                    </Par>
                    <Subheading>
                      Sign in with your social media account
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
                    <SignupBox>
                      <SignupTitle>Register Now</SignupTitle>
                      <Insert
                        placeholder="Username"
                        type="text"
                        onChange={(e) =>
                          this.setState({ username: e.target.value })
                        }
                      />
                      <Insert
                        placeholder="E-mail"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                      <Insert
                        placeholder="Password"
                        type="password"
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                      {/* <CheckBoxArea>
                                    <StyledCheckbox />
                                    <Label>
                                        Remember me
                                    </Label>
                                </CheckBoxArea>  */}
                      {this.state.btnLoading ? (
                        <center>
                          <CircularProgress />
                        </center>
                      ) : (
                        <Button onClick={() => this.handleSubmit()}>
                          <P> Sign up</P>
                        </Button>
                      )}
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

                      <Bp>Have an account already ?</Bp>
                      <Link
                        onClick={() => this.handelSignUpModel()}
                        className="signinlink"
                      >
                        Log In
                      </Link>
                    </SignupBox>
                  </SignupRight>
                </Grid>
              </Grid>
            </SignupOutter>
          </SignupContainer>
        </Dialog>
      </>
    );
  }
}

export default withStyles(useStyle)(Signup);
