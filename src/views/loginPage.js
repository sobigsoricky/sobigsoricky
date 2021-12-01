import React from 'react'
import { Navbar, Login } from './../components'
import { Newfooter, Offerads } from "../components";

export default function loginPage() {
    return (
        <>
        <Navbar />
            <Login />
            <Newfooter />
      <Offerads />
        </>
    )
}

