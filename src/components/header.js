import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/bulmaStyles.scss"
import "./header.module.scss"

const Header = ({ siteTitle }) => {
  const logo = useStaticQuery(graphql`
      query {
          file(relativePath: {eq: "logo.png"}) {
              childImageSharp {
                  fixed(height: 27, width: 168) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
  `)
  return (
    <header>
      <div className="container">
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a href="https://www.cotizaseguro.com" className="logo">
              <Img
                fixed={logo.file.childImageSharp.fixed}
                alt="Trusted Consumer"
                className="logo"
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <a href="https://www.cotizaseguro.com" className="navbar-item">Principal</a>
              <Link to="makes" className="navbar-item">Marcas</Link>
              <a href="http://cotizaseguro.com/seguro-de-hogar/" className="navbar-item">Obeten cotizaci&oacute;n</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  Otros Productos
                </div>
                <div className="navbar-dropdown">
                  <a href="https://cotizaseguro.com/medical-insurance" className="navbar-item">
                    Seguro M&eacute;dico
                  </a>
                  <a href="https://cotizaseguro.com/life-insurance/" className="navbar-item">
                    Seguro de Vida
                  </a>
                  <a href="https://cotizaseguro.com/seguro-de-hogar/" className="navbar-item">
                    Seguro de Auto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Header
