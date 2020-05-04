/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./GlobalComponents/Navbar"

import "./layout.css"
import Footer from "./GlobalComponents/Footer"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <>{children}</>
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
