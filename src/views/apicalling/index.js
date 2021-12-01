import axios from "axios";
import Cookies from "universal-cookie";
import * as contentful from "contentful";
import ReactGA from 'react-ga';

const Token =
  "Bearer eyJhbGciOJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfX2lkIjoiMTIzNCIsIm5hbWUiOiJqa2pramsiLCJpYXQiOjE2MTY4MjY3Nzh9.7guhhSO-J5pjQTXGhQtC-15pXnjYtn4M70_hlMfGEeQ";
const accessTokenSecret =
  "dkkdvsdkvvjnvjergioi9847938475209348tfndjva@24344$%&^)(#$())";
const Origin = "*";
const CryptoJS = require("crypto-js");
const cookies = new Cookies();


 
// const domain="https://api.coursenator.com/";
// const domain = "https://coursenatorapi.herokuapp.com/";
const domain = "https://coursenatorapis.herokuapp.com/";
// const domain = "http://localhost:7777/";
export const onPostData = async (url, data) => {
  return await axios.post(domain + url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: Token,
      "Access-Control-Allow-Origin": Origin,
      "Access-Control-Allow-Methods": "POST",
    },
  });
};
export const onGetData = async (url) => {
  return await axios.get(domain + url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: Token,
      "Access-Control-Allow-Origin": Origin,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};
export const onPutData = async (url, data) => {
  return await axios.put(domain + url, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: Token,
      "Access-Control-Allow-Origin": Origin,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};
export const onDeleteData = async (url) => {
  return await axios.delete(domain + url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: Token,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  });
};

export const domainString = () => {
  return domain;
};

export const convertToSlug = (Text) => {
  return Text.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export const cryptoEncrypt = (data) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    accessTokenSecret
  ).toString();
};
export const cryptoDecrypt = (ciphertext) => {
  var bytes = CryptoJS.AES.decrypt(ciphertext, accessTokenSecret);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export const isLogin = () => {
  if (cookies.get("__sdk")) {
    if (cryptoDecrypt(cookies.get("__sdk"))) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const ContentfulClient = contentful.createClient({
  space: "c2uxquelrfqj",
  accessToken: "sLM12KJgC9MnuYCRY257BUPxPC9Qx_F3RESM0wvpQLs",
});


export const googleAnalyticsAction=async()=>{   
  ReactGA.initialize('UA-213476590-1'); 
  ReactGA.set({ page:window.location.pathname })
  ReactGA.pageview(window.location.pathname+window.location.search);
}