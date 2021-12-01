import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GiSandsOfTime} from 'react-icons/gi'
import {FaRegEye,FaRegBookmark} from 'react-icons/fa'
import {FaStar} from 'react-icons/fa'

export const Rating = styled(FaStar)`
    width : 24px;
    height : 24px;
    color : white;
    padding : 3px;
    @media screen and (max-width : 1268px){
      width : 20px;
      height : 20px;
      padding : 2;
    }
`
export const RatingSection = styled.div`
    margin-top : 20px;
    width : fit-content;
    height : fit-content;
    border-radius : 5px;
    background : #afafaf;
    box-shadow : 0px 4px 10px rgba(125, 125, 125, 0.2);
    @media screen and (max-width : 768px){
      margin-top : 0px;
    }
`

export const TimeIcon = styled(GiSandsOfTime)`
    width: 18px;
    height: 18px;
    color : var(--primary);
    margin-right : 3px;
`
export const BookmarkIcon =styled(FaRegBookmark) `
position: absolute;
left: 42.36%;
right: 56.21%;
top: 28.82%;
bottom: 70.36%;
`;
export const EyeIcon = styled(FaRegEye)`
    width : 18px;
    height : 15px;
    color : var(--primary);
    margin-right : 5px;
`
export const Action = styled.div`
    width : 200px;
    height : fit-content;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`

export const CardSection = styled.div`
  padding: 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--white);
  align-items : center; 
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    margin: 0 30px;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom : 25px;
  }
`;

export const Card = styled(Link)`
  background: var(--white);
  box-shadow: 0px 4px 15px rgba(125, 125, 125, 0.5);
  width: 280px;
  height: 270px;
  text-decoration: none;
  border-radius: 30px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  padding: 24px;
  align-items: center;
  color: var(--grey);
`;

export const CardIcon = styled.div`
  color: var(--primary);
  margin: 15px 0;
`;

export const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  margin-top: 15px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  color: #000;
`;