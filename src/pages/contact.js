import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"
import Contact from "../components/Contact/Contact"

export const data = graphql`
  {
    contactBg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <StyledHero img={data.contactBg.childImageSharp.fluid} />
    <Contact />
  </Layout>
)

export default ContactPage
