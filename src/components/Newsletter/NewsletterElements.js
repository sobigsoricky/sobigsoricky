import styled from 'styled-components';
import { Button, Container } from '../../globalStyles'

export const NewsletterSec = styled.div`  
  color: var(--white);
  background: var(--white);
  display : flex;
  align-items  : center;
  justify-content : center;
  margin-top : 50px;
  margin-bottom : 50px;
  width : 100%;
  @media screen and (max-width : 768px) {
    width : 90vw;
  }
`
export const NewsletterBox = styled.div`
  display : flex;
  flex-direction : column;
  background: #4B4E54;
  box-shadow: 0px 0px 30px rgba(125, 125, 125, 0.5);
  border-radius: 49.4986px 2.23542px;
  text-decoration: none;
  height : 420px;
  width : 420px;
  justify-content : center;
  align-items : center;
  padding : 20px;
  margin-top : 10px;  
  @media screen and (max-width: 768px) {
    margin-top : 20px;
    height : 400px;
    width : 400px;
    margin : 0px;
    margin-top : 20px;
  }
`
export const NewsletterTitle = styled.h2`
  color : var(--white);
  font-weight : 300px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const TitleWrapper  =styled.div`
  margin : 10px;
`

export const NewsletterText = styled.p`
  color : var(--white);
  text-align : center;
`

export const NewsletterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width : 768px){
  }
`;

export const TextWrapper = styled.div`
  margin : 20px;
  margin-top : -10px;
`;

export const SearchBar = styled.input`
  width: 340px;
  height : 45px;
  padding: 8px 30px;
  border-radius: 15px;
  outline: none;
  font-size: 14px;
  color : var(--grey);
  margin : 20px;
  margin-top : 0;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const EmailButton = styled(Button)`
  background : var(--white);
  color : #4B4E54;
  margin : 20px;
  margin-top : 0;
`

