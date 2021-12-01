import { Navbar, Languages, NavbarOther } from './../components'
import React, { useEffect } from 'react'
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from './apicalling';

export default function Language(props) {
    useEffect(()=>{
        googleAnalyticsAction();
    })
    return (
        <>
           <NavbarOther /> 
            <Languages {...props} />
            <Newfooter />
      <Offerads />
        </>
    )
}
