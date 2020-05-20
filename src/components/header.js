import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./header.module.scss"
import BrandSelector from "./brandSelector"

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(graphql`
      query {
          file(relativePath: {eq: "logo.png"}) {
              childImageSharp {
                  fixed(height: 72, width: 450) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)
  return (
    <header className={styles.header}>
      <a href="www.cotizaseguro.com">
        <Img
          fixed={logo.file.childImageSharp.fixed}
          alt="Trusted Consumer"
          className="logo"
        />
      </a>
      <nav>
        <ul>
          <li><a href="https://www.cotizaseguro.com">Home</a></li>
          <li><BrandSelector/></li>
          <li><a href="https://www.cotizaseguro.com/vehicle-categories">Categories</a></li>
          <li><a href="http://cotizaseguro.com/seguro-de-hogar/">Get A Quote</a></li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
