import { FaRegShareSquare } from "react-icons/fa"
import { GiArcheryTarget } from "react-icons/gi"
import { VscTelescope } from "react-icons/vsc"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const CardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: var(--white);
  margin-bottom: 5vh;
  height: fit-content;
  max-width: 100vw;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
  @media screen and (max-width: 426px) {
    margin: 20px;
    flex-direction: column;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 25px;
  }
`

export const Card = styled(Link)`
  background: var(--white);
  box-shadow: 0px 4px 15px rgba(125, 125, 125, 0.5);
  width: 350px;
  height: 270px;
  text-decoration: none;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: 0.4s;
  }
  @media screen and (max-width: 1281px) {
    height: 230px;
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: none;
    }
    width: 232px;
    height: 240px;
    padding: 10px;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 270px;
  padding: 24px;
  align-items: center;
  color: var(--grey);
  @media screen and (max-width: 1281px) {
    height: 230px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`

export const CardIcon = styled.div`
  color: var(--primary);
  margin: 15px 0;
`

export const CardText = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
  margin-top: 10px;
`

export const CardTitle = styled.h3`
  margin-bottom: 5px;
  font-size: 20px;
  color: #000;
`

export const Telescope = styled(VscTelescope)`
  width: 32px;
  height: 32px;
`
export const Target = styled(GiArcheryTarget)`
  width: 32px;
  height: 32px;
`

export const Share = styled(FaRegShareSquare)`
  width: 28px;
  height: 28px;
`
