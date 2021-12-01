 
import React, { useEffect } from "react";
import Helmet from "react-helmet";
import { NavbarOther, Whataretracksmain } from "./../components";
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from "./apicalling";
 
export default function Whataretracks() {
  useEffect(()=>{
    googleAnalyticsAction();
  },[])
  return (
    <>
      <NavbarOther />
      <Helmet>
        <title>Tracks - Learning paths</title>
        <meta
          name='description'
          content='The `Tracks` feature helps our users to create their learning paths, customize them at any time and share their paths with other users.'
        />
      </Helmet>
      <Whataretracksmain />
      <Newfooter />
      <Offerads />
    </>
  )
}
