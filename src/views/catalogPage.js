import { NavbarOther, Catalogue, Cat } from "../components"
import React, { useEffect } from "react"
import Helmet from "react-helmet"
import { Newfooter, Offerads } from "../components"
import { googleAnalyticsAction } from "./apicalling"

// import Cat from '@/components/Catalog/Catalog'

export default function CatalogPage() {
  useEffect(() => {
    googleAnalyticsAction()
  }, [])
  return (
    <>
      <NavbarOther />
      <Helmet>
        <title>Catalogue </title>
        <meta
          name='description'
          content='Browse from thousands of indexed courses from the best providers in one catalogue containing a total of 149 subjects to suit all your learning needs.'
        />
      </Helmet>
      <Cat />
      {/* <Catalogue />     */}
      <Newfooter />
      <Offerads />
    </>
  )
}
