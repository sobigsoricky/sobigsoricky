import { Navbar, NavbarOther, Providers } from './../components'
import React, { useEffect } from 'react'
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from './apicalling';

export default function Provider(props) {
   useEffect(()=>{
    googleAnalyticsAction();
   },[])
    return (
        <>
           <NavbarOther /> 
            <Providers {...props} />
            <Newfooter />
      <Offerads />
        </>
    )
}
