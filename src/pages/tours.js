import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"

export const data = graphql`
  {
    tourBg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const TourPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    
    <StyledHero img={data.tourBg.childImageSharp.fluid}/>
  </Layout>
)

export default TourPage
