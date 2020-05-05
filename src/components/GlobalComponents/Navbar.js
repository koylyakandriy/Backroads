import React, { useState } from "react"
import styles from "../../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import links from "../../constants/links"
import socialIcons from "../../constants/socialIcons"
import logo from "../../images/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen ? `${styles.navLinks} ${styles.showNav}` : styles.navLinks
          }
        >
          {links.map(({ text, path }) => (
            <li key={text}>
              <AniLink fade to={path}>{text}</AniLink>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
