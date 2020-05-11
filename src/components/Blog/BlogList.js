import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogCard from "./BlogCard"
import Title from "../Title"

import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulBackroadsBlog {
      edges {
        node {
          id: contentful_id
          slug
          title
          published(formatString: "MMMM do, YYYY")
          simpleText {
            simpleText
          }
          text {
            text
          }
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

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </section>
  )
}

export default BlogList
