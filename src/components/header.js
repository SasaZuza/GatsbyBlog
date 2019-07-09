import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// Importing .scss file with basic styles
// import "./header.module.scss"

// Importing CSS modules - We can give it name like we want to
import headerStyles from "./header.module.scss"

const Header = () => {
  // This const allows us to query data with graphql
  // In this case we access title from 'gatsby-config.js' file
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            {/* This is how we apply CSS module - By it's name and style option from file we want to add */}
            {/* 'activeClassName' - defines class and styling for page that we are currently on */}
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
