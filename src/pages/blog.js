import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"

export const data = graphql`
  {
    blogBg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <StyledHero img={data.blogBg.childImageSharp.fluid} />
  </Layout>
)

export default BlogPage
