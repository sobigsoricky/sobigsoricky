import { Navbar, Signup } from './../components'
import React from 'react'
import { Newfooter, Offerads } from "../components";

export default function signupPage() {
    return (
       <>
        <Navbar />
            <Signup />
            <Newfooter />
      <Offerads />
       </>
    )
}

