import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="mainWrapper">
        <div className="Header">
          <Header siteTitle="PICARO" />
        </div>
        <main>{children}</main>
        <footer>
          <div className="footerContact">
            <div>PICARO SAS </div>
            <div>2 rue Campo Formio,75013 Paris</div>
            <div>contact@picaro.video</div>
            <div>06 70 94 84 96</div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
