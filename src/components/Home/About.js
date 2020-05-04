import React from "react"
import styles from "../../css/about.module.css"

import img from "../../images/defaultBcg.jpeg"
import Title from "../Title"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="default bg" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, nulla.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            fugit quia quod repellendus. Amet, doloremque.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
