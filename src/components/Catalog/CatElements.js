import { Link } from "react-router-dom";
import styled from "styled-components";

export const CatalogSection = styled.div`
  align-items: center;
  justify-content: center;

  margin-top: 80px;
  width: 100vw;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CatalogTitle = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 44px;
  padding: 50px 0 0;
  /* identical to box height */

  text-align: center;
  color: #802bb1;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const Catp = styled.p`
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  margin-top: 20px;
  color: #4b4e54;
  padding: 0 200px;
  @media screen and (max-width: 900px) {
    padding: 0 20px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 10px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 350px;
  box-sizing: border-box;
  background: var(--white);
  text-decoration: none;
  padding: 0 50px;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    padding: 10px 50px;
  }
`;

export const Topic = styled.p`
  color: var(--primary);
  font-style: 16px;
  font-weight: 600;
  align-items: left;
  padding: 5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Item = styled(Link)`
  color: var(--grey);
  align-items: left;
  text-decoration: none;
  padding: 5px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  :hover {
    transform: scale(1.01);
    transition: all 0.1s;
  }
  @media screen and (max-width: 768px) {
    text-shadow: 0;
  }
`;
