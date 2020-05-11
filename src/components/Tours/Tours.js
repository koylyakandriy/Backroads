import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TourList from "./TourList"

const getTours = graphql`
  query {
    tours: allContentfulBackroadsTour {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return <TourList tours={tours} />
}

export default Tours
