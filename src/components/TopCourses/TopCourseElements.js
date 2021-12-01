import styled from 'styled-components';
import { Card } from '../Cards/CardElements';

export const Image = styled.img`
    margin-top: -20px;
    width : 225px;
    height: 175px;
    @media screen and (max-width : 1128px){
        width : 175px;
        height : 125px;
        margin-top : -10px;
    }
`

export const Subject = styled(Card)`
    width : 225px;
    height : 250px;
    border-radius : 0;
    margin-left : 2%;
    margin-right : 2%;
    @media screen and (max-width : 1128px){
        width : 175px;
        height : 200px;
    }
`

export const CourseContainer = styled.div`
    display : flex;
    flex-direction : column;
    max-width : 100vw;
    margin-left : 10%;
    margin-right : 10%;
    align-items : center;
    justify-content : center;
    padding-bottom : 20px;
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  max-width : 0vw;
  
  @media screen and (max-width: 456px) {
      margin-top : 25px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom : 25px;
      margin-right : 5%;
      margin-left : 5%;
      
  }
`;