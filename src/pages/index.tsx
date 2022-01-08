import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./index.scss"
import Layout from "../components/layout"
import Seo from "../components/seo"
import VideoGrid from "../components/videoGrid"

import { useLocation } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
// import React, { useEffect } from "react";
// import GApageView from "../common/GApageView";
import ReactGA from "react-ga"
import create3DContent from "../three/create3DContent"

// const googleAnalytics = (location) =>{
//       ReactGA.initialize("UA-187216034-2", {
//       cookieDomain: "auto",
//       debug: false,
//     });
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);

// }

const IndexPage = () => {
  const [isMobile, SetIsMobile] = useState(false)
  const logo = (
    <StaticImage
      src="../images/logo_white_2.png"
      width={300}
      quality={95}
      className="logoHeader"
      formats={["auto", "webp", "avif"]}
      alt="logo Picaro Video"
      style={{ marginBottom: `1.45rem` }}
    />
  )

  useEffect(() => {
    // create3DContent("threeCanvas")
    // googleAnalytics(location)
  }, [])

  return (
    <Layout>
      <Seo
        title="Home"
        lang={"fr"}
        description={
          "Réalisateur Freelance sur Paris et dans toute la France disponible pour tout type de production audiovisuelle. Tournage, montage, motion design et vue aériennes drone."
        }
      />
      {/*
      <div className="backgroundAnimation">
         <div
          id="threeCanvas"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1000,
            height: "100%",
          }}
        >
          
        </div>
         
      </div>
      */}
      <div>
        <div className="wrapper-header">
          <div className="App-header">
            <div className="headerTexts">
              <div className="logo">{logo}</div>
              <h1 className="h1">PICARO</h1>
              <h2 className="soustitre">FREELANCE VIDEO - PARIS</h2>
              <h2 className="soustitre">
                <h2 className="soustitre_2">Réalisation - Montage</h2>
                <h2 className="soustitre_2">Motion Design - Vues Aériennes</h2>
              </h2>
              <h2 className="soustitre">06 70 94 84 96</h2>
              <h2 className="soustitre">contact@picaro.video</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="body">
        <VideoGrid></VideoGrid>
      </div>
    </Layout>
  )
}

export default IndexPage

{
  /*<h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
     <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p> */
}

// if (!this.state.isMobile && false) {
//   return (
//     <Grid container spacing={3}>
//       {this.state.types.map((e, i) => {
//         return (
//           <Grid key={i} item xs={3}>
//             <TypeButton
//               className={"typesBox"}
//               logo={
//                 "https://static.wixstatic.com/media/abebf0_b362d6aa65e64684bab61017a7d57945~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01/MARIANNES%20LOGO%20rond-03.webp"
//               }
//               title={e.title}
//               text={e.text}
//               onclick={""}
//             />
//           </Grid>
//         );
//       })}
//     </Grid>
//   );
// }
