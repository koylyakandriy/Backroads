import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

import styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [isOpen, setIsOpen] = useState(false)

  const showInfo = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={showInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {isOpen && <p>{info}</p>}
    </article>
  )
}

export default Day
