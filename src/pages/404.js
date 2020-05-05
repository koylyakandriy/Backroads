import React from "react"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from '../css/error.module.css';
import Banner from "../components/Banner"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
   <header className={styles.error}>
     <Banner title="oops it's a dead end">
       <AniLink fade to="/" className="btn-white">Back to home page</AniLink>
     </Banner>
   </header>
  </Layout>
)

export default NotFoundPage

