import styled from 'styled-components';
import { Button , Container} from '../../globalStyles';


export const AboutSec = styled.div`
  margin-top : 0;
  color: var(--white);
  padding: 50px 50px;
  background: var(--white);
  max-height : fit-content;
  max-width : 100vw; 
  display : flex;
  align-items : center;
  justify-content : center;
  margin-left : 5%;
  margin-right : 5%;
`;

export const AboutRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    flex-direction : column-reverse;
  }
`;

export const AboutColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 500  px;
  padding-top: 0;
  padding-left : 15%;
  @media screen and (max-width : 768px){
    padding-left : 0;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;  
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  @media screen and (max-width : 768px){  
  }
`;

export const Img = styled.img`
  vertical-align: middle;
  align-items : center;
  display: flex;
  justify-content : center;
  height: 500px;
  width : 500px;
  @media screen and (max-width : 768px){

  }
`;

export const Text = styled.p`
  text-align:center;
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ black }) => (black ? '#000; ' : 'var(--grey)') };
  text-shadow: ${({ dropshadow }) => (dropshadow ? '5px 4px 4px rgba(0, 0, 0, 0.20); ' : 'none') };
  font-weight: ${({ bold }) => (bold ? 'bold; ' : 'none') };
`;

export const AboutSecButton = styled(Button)`
  padding: ${({ bigger }) => (bigger ? '10px 55px' : '10px 30px')};
  margin-left: 25px;
  @media screen and (max-width: 1268px){
    margin-top: 10px;
    margin-left: 10%;
    width: 80%;
  }

`