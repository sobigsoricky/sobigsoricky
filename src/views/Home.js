import React, { useEffect } from "react"
import {
  Navbar,
  AboutSection,
  Cards,
  HeroSection,
  Newsletter,
  TopcourseSec,
  Knowprovider,
  BySubject,
} from "./../components"
import { Newfooter, Offerads } from "../components"
import { googleAnalyticsAction } from "./apicalling"
 
// import SearchFilter from "../components/SearchFilter/SearchFilter";
function Home(props) {
  useEffect(()=>{
    googleAnalyticsAction()
  },[])
  return (
    <>
      {/* <Loading  name='home'/> */}
      {/* <Navbar1/> */}

      <Navbar color='transparent' />

      <HeroSection />
      <AboutSection />
      <Cards />
      <Knowprovider />
      {/* <SearchFilter/> */}
      <BySubject />
      <TopcourseSec />
      <Newsletter />
      <Newfooter />
      <Offerads />
    </>
  )
}
export default Home
