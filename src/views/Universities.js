import { Navbar, NavbarOther, University } from './../components'
import React, { useEffect } from 'react'
import { Newfooter, Offerads } from "../components";
import { googleAnalyticsAction } from './apicalling';

export default function Universities(props) {
    useEffect(()=>{
        googleAnalyticsAction();
    })
    return (
        <>
        
           <NavbarOther />
            <University {...props} />
            <Newfooter />
      <Offerads />
        </>
    )
}
