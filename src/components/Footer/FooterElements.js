import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "flex",
    // [theme.breakpoints.down('md')]: {
    //   display: "none"
    // },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down('md')]: {
      display: "flex",
    },
  },
}))

export const FooterContainer = styled.div`
  background-color: #2D283E;
  padding: 4rem 0 2rem 0;
  display: flex;
  position:relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 99vw;
height: 737px;
// @media screen and (max-width: 1279.95px){
//   height:100%
// }

`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
  @media screen and (max-width : 900px){
  margin-bottom: 12px;
  padding: 12px;
  }
`;
export const FooterHeading = styled.h3`
left: 5.28%;
right: 81.25%;
position:absolute;
top: 9.21%;
bottom: 85.67%;
color:#fff;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 43px;
display: flex;
align-items: center;
text-align: justify;
@media screen and (max-width: 1279.95px){
  left:40%
}
@media screen and (max-width: 900px) {
  position:unset;
}
`;
export const FooterHeadingLine = styled.span`
position: absolute;
left: 5.28%;
right: 90.76%;
top: 16.18%;
bottom: 83.82%;
border: 1px solid #E5E5E5;
@media screen and (max-width: 1279.95px){
  left:40%;
  right:55%
}
@media screen and (max-width: 900px) {
  position:unset;
  width:90px
}
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (max-width : 900px){
    align-items : center;
    font-size : 18px;
  }
`;

export const FooterSubText = styled.p`
  font-size: 14px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border : 1px ;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
position: absolute;
left: 66.1%;
right: 8.26%;
top: 68.37%;
bottom: 25.97%;

background: #FFFFFF;
border: 0.458084px solid #000000;
box-sizing: border-box;
border-radius: 18.3234px;
width: 369.22px;
  &::placeholder {
    font-family: Nunito;
    color: ##C4C4C4;
    font-size: 16.491px;
line-height: 22px;
padding:0 20px

  }
  @media screen and (max-width: 1279.95px) {
    
    left:32%;
    top:50%;
    margin: 16px 0;
    height:34px;
    &::placeholder{
      font-size:14px;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    position:unset;
    margin: 16px 0;
    height:34px;
    &::placeholder{
      font-size:14px;
    }
  }
`;
export const FooterNewsBtn = styled.button`
display: flex;
    justify-content:center;
    align-items: center;
    font-family: Nunito;
position: absolute;
left: 72.78%;
right: 14.87%;
top: 83.2%;
font-size: 13.9157px;
bottom: 11.02%;
width:177.74px;
background: #FFFFFF;
border: 0.916168px solid #000000;
box-sizing: border-box;
border-radius: 27.485px;
@media screen and (max-width: 1279.95px) {
  left:41%;
  top:60%;
  padding:8px;
  bottom:unset;
}
@media screen and (max-width: 900px){
  position:unset;
  margin:10px 0;
  height:34px;
}
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1279.95px) {
    margin-top:-17%;
  }
  @media screen and (max-width: 900px) {
    padding-top: 32px;
    overflow-y: scroll;
    margin-top:0
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items : center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  text-align: left;
  max-width: 100%;
  font-size:16px;
  line-height: 20px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 10px;
    width: 80%;
  }
`;
export const FooterBtn = styled.button`
background: rgba(134, 93, 166, 0.12);
border: 1.01483px solid #FFFFFF;
box-sizing: border-box;
border-radius: 10.1483px;
padding: 3px 10px;
width:111px;
height: 27.41px;
    color: #fff;
    line-height: 20px;
`;
export const FooterNews = styled.div`
position: absolute;
left: 62.99%;
right: 5.14%;
top: 56.32%;
bottom: 19.67%;

background: #FFFFFF;
border: 0.916168px solid #000000;
box-sizing: border-box;
filter: blur(3.66467px);
border-radius: 27.485px;
`;
export const FooterNewsLatter = styled.p`
position: absolute;
left: 68.58%;
right: 10.74%;
top: 60.29%;
bottom: 36.31%;
width:297px;
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 18.3234px;
line-height: 25px;
text-align: center;

color: #2D283E;
@media screen and (max-width: 900px){
  position:unset;
  color:#fff
}

`;
export const FooterLinkBottom = styled.div`

position: absolute;
left: 8.1%;
right: 50%;
width:44%;
top: 74.61%;
bottom: 18.68%;
justify-content: center;
font-family: Sora;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
text-align: justify;
@media screen and (max-width: 1279.95px) {
  top:70%;
  margin:auto;
  left:28%;
  font-size:12px
}
@media screen and (max-width: 900px) {
  font-size : 14px;
  width:83%;
  position: unset;
}
@media screen and (max-width: 400px) {
  
  width:99%;
  position: unset;
}
`;
export const FooterLinkTitle = styled(Link)`
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 16px;
  text-decoration  : none;
  color : white;
  @media screen and (max-width: 900px) {
    font-size : 14px;
  }
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: var(--grey);
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1279.95px){
    padding:0 0 0 1px
  }
  
  @media screen and (max-width : 600px){
    font-size : 8px;
    padding:0 0 0 4px;
  }
  @media screen and (max-width : 400px){
    font-size : 7px;
    padding:0;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  

`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
 
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;
  
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const HorizontalLine = styled.div`
position: absolute;
left: 6.81%;
right: 41.04%;
top: 73.68%;
bottom: 26.32%;

border: 1px solid #4B4E54; 
@media screen and (max-width: 1279.95px) {
  top:70%;
  right: 22%;
    left: 22%;
    bottom:unset
}
}
@media screen and (max-width:900px){
  position: unset;
    width: 200px;
    margin-bottom: 20px;
}
`

export const SocialIcons = styled.div`
  display: flex;
  position: absolute;
  border-top:1px solid #4B4E54;
  padding:32px 0;
left: -15.56%;
right: 49.98%;
top: 82.24%;
bottom: 11.08%;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 35%;
  @media screen and (max-width: 1279.95px) {
    top:80%;
    left:0
  }
  @media screen and (max-width: 900px){
    margin-right : 37%;
    position:unset
  }
`;
export const SocialIconscontact = styled.div`
  display: flex;
   padding:32px 0;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 35%;
  @media screen and (max-width: 900px){
    margin-right : 37%;
    position:unset
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 32px;
  @media screen and (max-width: 900px){
    font-size : 150%;
  }
`;
