import React from "react"
import {Link} from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from '../css/error.module.css';
import Banner from "../components/Banner"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
   <header className={styles.error}>
     <Banner title="oops it's a dead end">
       <Link to="/" className="btn-white">Back to home page</Link>
     </Banner>
   </header>
  </Layout>
)

export default NotFoundPage

