import React, { useEffect, useState } from "react"

import Tour from "./Tour"
import Title from "../Title"

import styles from "../../css/items.module.css"

const TourList = ({ tours }) => {
  const [sortedTours, setSortedTours] = useState([])
  const [, setAllTours] = useState([])

  useEffect(() => {
    setAllTours(tours.edges)
    setSortedTours(tours.edges)
  }, [tours])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
    </section>
  )
}

export default TourList
