module.exports = {
  siteMetadata: {
    title: `Picaro Freelance Video Paris`,
    description: `Réalisateur Freelance basé sur Paris. Realisation, tournage, montage, motion design et vues aériennes. Bienvenu sur mon site vitrine`,
    author: `Goulc'hen Le Meur`,
    siteUrl: `https://picaro.video/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Picaro Freelance Video - Paris`,
        short_name: `Picaro`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_blue.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    require.resolve(`./source-plugin`)
  ],
}
