import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div className="headerTitleLogo">
            <div>
              {
                <StaticImage
                  src="../images/logo_header.png"
                  className="imageLogo"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="Logo Picaro"
                  
                />
              }
            </div>
            <div className="titleWrapper"><div>{siteTitle}</div></div>
          </div>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
