import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur modi odio quia repellat voluptate voluptatum?"
      >
        <Link to="/tours" className="btn-white">
          Explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)

export default IndexPage
