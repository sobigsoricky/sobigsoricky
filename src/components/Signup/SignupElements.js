import { Title } from "./../../globalStyles";
import styled from "styled-components";
import img from "./login1.png";
import { ImGoogle3 } from "react-icons/im";

export const SignupTitle = styled(Title)`
  margin-bottom: 34px;
  font-family: Sora;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 44px;
  text-align: center;
  margin-top: 0;
  color: #00288d;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 900px) {
    font-size: 32px;
  }
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const SignupContainer = styled.div`
  color: #fff;
`;
export const SignupOutter = styled.div`
min-width:800px;
max-width:800px;   
height: 536px; 
min-height:100%;
max-height:100%;
width:100%;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
border-radius: 20px;

background:#fff;
@media screen and (max-width:960px){
    max-width:100%;
    min-width:95%;
 
@media screen and (max-width: 425px){
    height: 100%;
    width: 100%;
    min-width: 93%;
    max-width: none;
   
}
`;
export const SignupLeft = styled.div`
  background: url(${img}) center center no-repeat;
  // width:44.6%;
  height: 100%;
  background-size: cover;
  position: relative;
  border-radius: 20px 0 0 20px;

  @media screen and (max-width: 425px) {
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-width: none;
    margin: auto;
  }
`;

export const Heading = styled.h1`
  font-size: 30px;
  padding: 68px 20px 0 31px;
`;
export const Par = styled.p`
  font-weight: 300;
  font-size: 16px;
  padding: 20px 96px 0 31px;
  word-spacing: 2px;
  line-height: 22px;
`;
export const Subheading = styled.h5`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  bottom: 22%;
  left: 10%;
`;
export const Social = styled.div`
  position: absolute;
  display: flex;
  bottom: 5%;
  left: 23%;
`;

export const Li = styled.div`
  padding: 18%;
`;
export const SignupRight = styled.div`
  // width:55.4%;
`;

export const SignupBox = styled.div`
  width: 100%;
  position: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;

  height: fit-content;
  padding: 33px 43px 0 55px;
  color: var(--grey);
`;

export const Insert = styled.input`
  height: 50px;
  padding: 8px 12px;
  width: 341px;
  outline: none;
  border: 0.75px solid rgba(0, 40, 141, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 25px;
  &::placeholder {
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    color: #afafaf;
  }
  @media screen and (max-width: 960px) {
    width: auto;
    height: auto;
    font-size: 15px;
  }
`;

export const Insert1 = styled.input`
  height: 50px;
  padding: 8px 12px;
  width: 380px;
  outline: none;
  border: 0.75px solid rgba(0, 40, 141, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 25px;
  &::placeholder {
    font-family: Sora;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    color: #afafaf;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    font-size: 15px;
  }
`;
export const Label = styled.label``;
export const Bp = styled.p`
  font-family: Nunito;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  margin-top: 34px;
  margin-bottom: 5px;
  color: #1a2237;
  @media screen and (max-width: 425px) {
    font-size: 16px;
  }
`;
export const CheckBox = styled.input`
  border: none;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-right: 10px;
`;

export const CheckBoxArea = styled.div`
  flex-direction: row;
  width: auto;
  padding-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  min-width: 142px;
  max-width: 142px;

  width: 100%;

  height: 45px;
  background: #00288d;
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 39px;
  }
`;
export const P = styled.p`
  font-family: Sora;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
