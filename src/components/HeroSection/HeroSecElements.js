import { Button, Title } from "../../globalStyles";
import styled from "styled-components";
import bg from "./bgm.webp";

export const HeroContainer = styled.div`
  background: url(${bg}) center center/cover no-repeat;
  height: 92.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  @media screen and (max-width: 1281px) {
    height: 85.5vh;
  } ;
`;
export const HeroContainerOverly = styled.div`
  position: absolute;
  width: 100%;
  height: 92.5vh;
  left: 0px;
  top: 0px;
  opacity: 0.3;
  background: #802bb180;
  @media screen and (max-width: 1281px) {
    height: 85.5vh;
  } ;
`;
export const HeroTitle = styled(Title)`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  color: var(--white);
  z-index: 1;

  @media screen and (max-width: 960px) {
    font-size: 40px;
    margin: 12vw 0 0;
  }
  @media screen and (max-width: 478px) {
    font-size: 30px;
    margin: 12vw 0 0;
  }
`;
export const SearchBar = styled.input`
  width: 850px;
  height: 50px;
  padding: 8px 30px;
  border-radius: 25px;
  margin-top: 25px;
  outline: none;
  font-size: 16px;
  margin-bottom: 25px;
  border: 0.5px solid var(--primary);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
  z-index: 1;
  @media screen and (max-width: 960px) {
    width: 80vw;
    height: 45px;
    font-size: 12px;
  }
`;

export const HeroBtn = styled(Button)`
  margin-left: auto;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;
export const HeroWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
