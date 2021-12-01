import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const SubjectScroll = styled.div`
  margin-top : 0;
  height: 160px;
  @media screen and (max-width : 768px){
  }
`;

export const CarouselWrapper = styled.div`
  margin-right : 5%;
  margin-left : 5%;
  margin-top : 15px;
  height : fit-content;
  @media screen and (max-width : 768px){
    margin-right : 5%;
    margin-left : 5%;
  }
`

export const CarouselContent = styled.div`
  max-width : 100vw;
  display : flex;
  margin-right : auto;
  @media screen and (max-width : 768px){
  }
`

export const Subtext = styled.p`
  padding : 30px;
  text-align: center;
  color : var(--grey);
`
export const SubjectContainer = styled.div`
  margin-top : 0;
  height : fit-content;
  padding : 20px;
  display : flex;
  flex-direction : column;
  max-width: 100vw;
  margin-left : 10%;
  margin-right : 10%;
  @media screen and (max-width : 768px) { 
    margin-left : 0;
    margin-right : 0;
  }
`

export const SubjectButton = styled(Button)`
    ${Button}
`

export const ButtonWrapper = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
`