import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../css/single-blog.module.css"

const BlogTemplate = ({ data }) => {
  const {
    published,
    title,
    text: { json },
  } = data.blogs

  const options = {
    renderNode: {
      "embedded-asset-block": node => (
        <div className="rich">
          <h3>this is awesome image</h3>
          <img
            width={400}
            src={node.data.target.fields.file["en-US"].url}
            alt="simple blog"
          />
          <p>image provider by</p>
        </div>
      ),
    },
  }

  return (
    <Layout>
      <SEO title={`${title}`} />

      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>

          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

          <AniLink fade to="/blog" className="btn-primary">
            all blogs
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blogs: contentfulBackroadsBlog(slug: { eq: $slug }) {
      published(formatString: "MMMM Do, YYYY")
      title
      text {
        json
      }
    }
  }
`

export default BlogTemplate
