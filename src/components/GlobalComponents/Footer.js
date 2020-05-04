import React from "react"
import { Link } from "gatsby"

import socialIcons from "../../constants/socialIcons"
import links from "../../constants/links"

import styles from "../../css/footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(({ text, path }) => (
          <Link key={text} to={path}>
            {text}
          </Link>
        ))}
      </div>
      <div className={styles.icons}>
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
      <div className={styles.copyright}>
        copyright &copy; <br />
        backroads travel company <br />
        {new Date().getFullYear()} <br />
        all rights reserved
      </div>
    </footer>
  )
}

export default Footer
